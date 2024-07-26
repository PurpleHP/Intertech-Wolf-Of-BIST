import React, { useState, useEffect } from "react";

const useAnswerApi = (quizId) => {
  const [error, setError] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const raw = JSON.stringify({ "quizId": quizId });
        const requestOptions = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: raw,
          redirect: "follow"
        };
        const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Chapter/getQuizzAnswersByQuizId';
        const response = await fetch(targetUrl, requestOptions);
        const data = await response.json();
        console.log(data);
        let paragraphs = [];
        let answers = [];
        for (let i = 0; i < data.length; i++) {
            paragraphs.push(data[i].question);
            answers.push(data[i].option_a);
            answers.push(data[i].option_b);
            answers.push(data[i].option_c);
            answers.push(data[i].option_d);  
        }
        setQuizParagraphs(paragraphs);
        setQuizAnswers(answers);
       
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    };

    fetchData(); // Call fetchData when the component mounts or eduId changes
  }, [eduId]); // Dependency array, re-run the effect when eduId changes

  console.log("TestApi: \n" + quizAnswers);
  return {  quizAnswers, error };
};

export default useAnswerApi;