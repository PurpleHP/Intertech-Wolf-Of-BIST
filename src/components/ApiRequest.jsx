import React from 'react';
import { useState } from 'react';

const ApiRequest = () => {
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [QuizParagraphs, setQuizParagraphs] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState(null);



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
            let chapterHeader = data[i].chapterHeader.replaceAll("\\n", "\n").replaceAll("?\t", "\t");
            let chapterDescription = data[i].chapterDescription.replaceAll("\\n", "\n").replaceAll("?\t", "\t");
            let temp = chapterHeader + ":\n" + chapterDescription + "\n\n";
            newEducation.push(temp); // Step 2: Append temp to the array
          }
          setEducation(newEducation); // Step 3: Update the state with the array
          setApiResponse(newEducation);
        })
        .catch(error => {
          console.error('Error:', error);
          setApiResponse(error.message);
        });
    } catch (error) {
      setError(error.message);
      setApiResponse(error.message);
    }
  };

  const fetchData2 = async () => {
    try {

      const inputPrompt = document.querySelector('input').value;
      const raw = JSON.stringify({
        "prompt": inputPrompt
      });

      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: "follow"

      };
      const targetUrl = 'https://mysite-281y.onrender.com/process_prompt';
      fetch(targetUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setApiResponse(data.result);
        })
        .catch(error => {
          console.error('Error:', error);
          setApiResponse(error.message);
        });
    } catch (error) {
      setError(error.message);
      setApiResponse(error.message);
    }
  };

  const fetchData5 = async () => {
    try {

      const raw = JSON.stringify({
      });

      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: "follow"

      };
      const targetUrl = 'https://mysite-281y.onrender.com/text_to_speech';
      fetch(targetUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setApiResponse(data.result);
        })
        .catch(error => {
          console.error('Error:', error);
          setApiResponse(error.message);
        });
    } catch (error) {
      setError(error.message);
      setApiResponse(error.message);
    }
  };


  const fetchData3 = async () => {
    try {

      const raw = JSON.stringify({
        "eduId": 14
      });

      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: "follow"

      };
      const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Quiz/getQuizzesByEducationId';
      fetch(targetUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          let paragraphs = []; // Initialize an empty array to hold paragraphs
          let answers = [];
          for (let i = 0; i < data.length; i++) {
            paragraphs.push(data[i].question);
            answers.push(data[i].option_a); // Accumulate paragraphs
            answers.push(data[i].option_b);
            answers.push(data[i].option_c);
            answers.push(data[i].option_d);          
          }
          setQuizParagraphs(paragraphs);
          setQuizAnswers(answers);
          setApiResponse(paragraphs + "\n\n"+ answers)
        })
        .catch(error => {
          console.error('Error:', error);
          setApiResponse(error.message);
        });
    } catch (error) {
      setError(error.message);
      setApiResponse(error.message);
    }
  };

  const fetchData4 = async () => {
    try {

      const raw = JSON.stringify({
        "quizId": 32
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
          setApiResponse("the answer is:" + data[0].answer)
          // Initialize an empty array to hold paragraphs
        })
        .catch(error => {
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
      <div className='flex flex-row'>
        <div>
          <button className='text-white border-2 m-4 p-4 rounded-lg' onClick={fetchData2}>Fetch AI Data</button>
          <input type="text" className='text-black border-2 m-4 p-4 rounded-lg' placeholder="Enter your prompt" />
          <p className='text-white m-4 p-4 break-words whitespace-pre-line'>{apiResponse}</p>
        </div>
        <div>
          <button className='text-white border-2 m-4 p-4 rounded-lg' onClick={fetchData5}>Fetch Audio</button>
          <p className='text-white m-4 p-4 break-words whitespace-pre-line'>{apiResponse}</p>
        </div>
        <div>
          <button className='text-white border-2 m-4 p-4 rounded-lg' onClick={fetchData3}>Fetch Quiz Paragraph and options Data</button>
          <p className='text-white m-4 p-4 break-words whitespace-pre-line'>{apiResponse}</p>
        </div>
        <div>
          <button className='text-white border-2 m-4 p-4 rounded-lg' onClick={fetchData4}>Fetch Quiz answer Data</button>
          <p className='text-white m-4 p-4 break-words whitespace-pre-line'>{apiResponse}</p>
        </div>
      </div>

    </div>
  );
}

export default ApiRequest;