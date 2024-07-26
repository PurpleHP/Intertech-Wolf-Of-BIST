import { useState, useEffect } from "react";

const useTestApi = (eduId) => {
  
  const [QuizParagraphs, setQuizParagraphs] = useState(null);
  const [quizOptions, setQuizOptions] = useState(null);
  const [quizIds, setQuizIds] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const raw = JSON.stringify({
          "eduId": eduId
        });
  
        const requestOptions = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: raw,
          redirect: "follow"
  
        };
        const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Quiz/getQuizzesByEducationId';
        fetch(targetUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          let paragraphs = []; // Initialize an empty array to hold paragraphs
          let answers = [];
          for (let i = 0; i < data.length; i++) {
            paragraphs.push(data[i].question);
            answers.push(data[i].option_a); // Accumulate paragraphs
            answers.push(data[i].option_b);
            answers.push(data[i].option_c);
            answers.push(data[i].option_d);          
          }
          setQuizParagraphs(paragraphs);
          setQuizOptions(answers);
        })
        .catch(error => {
          setError(error.message);

          console.error('Error:', error);
        });
    } catch (error) {
      setError(error.message);
      console.error('Error:', error)
    }
    };

    fetchData(); // Call fetchData when the component mounts or eduId changes
  }, [eduId]); // Dependency array, re-run the effect when eduId changes

  console.log("TestApi: \n" + QuizParagraphs + "\n" + quizOptions + "\n" + quizIds);
  return { QuizParagraphs, quizOptions, quizIds, error };
};

export default useTestApi;