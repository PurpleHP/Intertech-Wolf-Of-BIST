import { useState, useEffect } from "react";

const useAnswerApi = (quizId) => {
  const [quizAnswers, setQuizAnswers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
  
        const raw = JSON.stringify({
          "quizId": quizId
        });
  
        const requestOptions = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: raw,
          redirect: "follow"
  
        };
        const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Quiz/getQuizzAnswersByQuizId';
        fetch(targetUrl, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setQuizAnswers(data[0].answer)
            
            // Initialize an empty array to hold paragraphs
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [quizId]); // Dependency array, re-run the effect when eduId changes

  console.log("TestApi: \n" + quizAnswers);
  return { quizAnswers, error };
};

export default useAnswerApi;