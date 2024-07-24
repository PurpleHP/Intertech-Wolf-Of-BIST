import React, { useState } from "react";


const ApiRequest = (eduId) => {
    const [error, setError] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);
    const [education, setEducation] = useState([]);
    const [Header, setHeader] = useState([]);

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
            const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Chapter/getChaptersByEducationId';
            fetch(targetUrl, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    let newEducation = []; // Step 1: Initialize an empty array
                    let newHeader = [];
                    for (let i = 0; i < data.length; i++) {
                      let chapterHeader = data[i].chapterHeader.replaceAll("\\n", "\n").replaceAll("?\t", "\t");
                    newHeader.push({ title: chapterHeader, index: i });
                      let chapterDescription = data[i].chapterDescription.replaceAll("\\n", "\n").replaceAll("?\t", "\t");
                      let temp = chapterHeader + ":\n" + chapterDescription +  "\n\n";
                      newEducation.push(temp); // Step 2: Append temp to the array
                    }
                    setEducation(newEducation); // Step 3: Update the state with the array
                    setApiResponse(newEducation);
                    setHeader(newHeader);
                  })
                    .catch(error =>{
                    console.error('Error:', error);
                    setApiResponse(error.message);
                });
        } catch (error) {
          setError(error.message);
          setApiResponse(error.message);
        }
      };


    return education, Header;

};
