import React from 'react';
import {useState} from 'react';

const ApiRequest = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);

    const fetchData = async () => {
        try {
          
            const raw = JSON.stringify({
              "eduId": 4
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
                    setApiResponse(JSON.stringify(data));
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
            <p className='text-white m-4 p-4'>{apiResponse}</p>
        </div>
    );
}

export default ApiRequest;