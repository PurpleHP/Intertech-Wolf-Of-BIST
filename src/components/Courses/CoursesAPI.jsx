import React, { useState, useEffect } from "react";

const useApiRequest = (eduId) => {
  const [error, setError] = useState(null);
  const [education, setEducation] = useState([]);
  const [Header, setHeader] = useState([]);

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
        const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Chapter/getChaptersByEducationId';
        const response = await fetch(targetUrl, requestOptions);
        const data = await response.json();
        console.log(data);
        let newEducation = [];
        let newHeader = [];
        for (let i = 0; i < data.length; i++) {
          let chapterHeader = data[i].chapterHeader.replaceAll("\\n", "\n").replaceAll("?\t", "\t");
          newHeader.push({ title: chapterHeader, index: i });
          let chapterDescription = data[i].chapterDescription.replaceAll("\\n", "\n").replaceAll("?\t", "\t");
          let temp =":\n" + chapterDescription + "\n\n";
          newEducation.push(temp);
        }
        setEducation(newEducation);
        setHeader(newHeader);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    };

    fetchData(); // Call fetchData when the component mounts or eduId changes
  }, [eduId]); // Dependency array, re-run the effect when eduId changes

  return { education, Header, error };
};

export default useApiRequest;