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

        const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Quiz/getQuizzAnswersByQuizId';
        const response = await fetch(targetUrl, requestOptions);
        const data = await response.json();
        setQuizAnswers(data[0].answer);
      } catch (error) {
        setError(error.message);
      }
    };

    if (quizId) {
      fetchData();
    }
  }, [quizId]);

  return { quizAnswers, error };
};

export default useAnswerApi;
