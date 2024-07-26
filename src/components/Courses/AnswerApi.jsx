import { useState, useEffect } from "react";

const useAnswerApi = (quizId) => {
  const [quizAnswers, setQuizAnswers] = useState(null);
  const [error, setError] = useState(null);

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
        fetch(targetUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setQuizAnswers(data.answer);
        })
        .catch(error => {
          setError(error.message);

          console.error('Error:', error);
        });  
      } catch (error) {
        setError(error.message);
        console.error('Error:', error);
      }
    };

    fetchData(); // Call fetchData when the component mounts or eduId changes
  }, [eduId]); // Dependency array, re-run the effect when eduId changes

  console.log("TestApi: \n" + quizAnswers);
  return { quizAnswers, error };
};

export default useAnswerApi;