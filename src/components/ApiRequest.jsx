import React from 'react';
import {useState} from 'react';

const ApiRequest = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);

    const fetchData = async () => {
        try {
          const response = await fetch('https://financialtrainerfinal120240716125722.azurewebsites.net/api/Chapter/getChaptersByEducationId', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "eduId": 4,
            }),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          setApiResponse(data);
        } catch (error) {
          setError(error.message);
        }
      };
        
    
    return (
        <div>
        <button onClick={fetchData}>Fetch Data</button>
            <p>{apiResponse}</p>
        </div>
    );
}

export default ApiRequest;