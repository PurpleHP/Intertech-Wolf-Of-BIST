import React from 'react';
import {useState} from 'react';

const ApiRequest = () => {
    const [error, setError] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);

    const [education, setEducation] = useState([]);

    const fetchData = async () => {
        try {
          
            const raw = JSON.stringify({
              "eduId": 11
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
                    for (let i = 0; i < data.length; i++) {
                      let chapterHeader = data[i].chapterHeader.replaceAll("\\n ?\t", "\n");
                      let chapterDescription = data[i].chapterDescription.replaceAll("\\n ?\t", "\n");
                      let temp = chapterHeader + ":\n" + chapterDescription +  "\n\n";
                      newEducation.push(temp); // Step 2: Append temp to the array
                    }
                    setEducation(newEducation); // Step 3: Update the state with the array
                    setApiResponse(newEducation);
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
        
    
    return (
        <div>
        <button className='text-white border-2 m-4 p-4 rounded-lg' onClick={fetchData}>Fetch Data</button>
            <p className='text-white m-4 p-4 break-words whitespace-pre-line'>{apiResponse}</p>
        </div>
    );
}

export default ApiRequest;