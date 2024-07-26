import React, { useState, useEffect } from "react";

const useTestApi = (eduId) => {
  const [error, setError] = useState(null);
  const [QuizParagraphs, setQuizParagraphs] = useState(null);
  const [quizOptions, setQuizOptions] = useState(null);
  const [quizIds, setQuizIds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const raw = JSON.stringify({ "eduId": eduId });
        const requestOptions = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: raw,
          redirect: "follow"
        };
        const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Chapter/getQuizzesByEducationId';
        const response = await fetch(targetUrl, requestOptions);
        const data = await response.json();
        console.log(data);
        let paragraphs = [];
        let answers = [];
        let ids = [];
        for (let i = 0; i < data.length; i++) {
            paragraphs.push(data[i].question);
            answers.push(data[i].option_a);
            answers.push(data[i].option_b);
            answers.push(data[i].option_c);
            answers.push(data[i].option_d);  
            ids.push(data[i].quizId);
        }
        setQuizParagraphs(paragraphs);
        setQuizOptions(answers);
        setQuizIds(ids);
       
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    };

    fetchData(); // Call fetchData when the component mounts or eduId changes
  }, [eduId]); // Dependency array, re-run the effect when eduId changes

  console.log("TestApi: \n" + QuizParagraphs + "\n" + quizOptions + "\n" + quizIds);
  return { QuizParagraphs, quizOptions, quizIds, error };
};

export default useTestApi;