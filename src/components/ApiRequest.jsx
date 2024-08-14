import React, { useState, useEffect } from 'react';

const ApiRequest = () => {
  const [apiResponse, setApiResponse] = useState('');
  const [error, setError] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const audioRef = React.createRef();

  const handleRecordAudio = async () => {
    // Reset the audioBlob variable to null
    setAudioBlob(null);
    setAudioUrl(null);
  
    // Check if the browser supports the MediaRecorder API
    if (navigator.mediaDevices.getUserMedia) {
      // Request access to the user's microphone
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
  
        // Create a blob to store the recorded audio
        let audioBlob;
  
        // Start recording
        mediaRecorder.start();
  
        // Stop recording after 5 seconds
        setTimeout(() => {
          mediaRecorder.stop();
        }, 5000);
  
        // Handle the recorded audio
        mediaRecorder.ondataavailable = (event) => {
          audioBlob = new Blob([event.data], { type: 'audio/wav' });
          setAudioBlob(audioBlob);
          setAudioUrl(URL.createObjectURL(audioBlob));
  
          // Send the recorded audio to the endpoint
          const formData = new FormData();
          formData.append('audio', audioBlob);
  
          fetch('http://localhost:8000/voice-prompt', {
            method: 'POST',
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setApiResponse(data.text);
            })
            .catch((error) => {
              console.error(error);
            });
        };
  
        // Handle any errors
        mediaRecorder.onerror = (event) => {
          console.error('Error recording audio:', event.error);
        };
  
        // Handle the end of recording
        mediaRecorder.onstop = () => {
          console.log('Recording stopped');
        };
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    } else {
      console.error('Browser does not support MediaRecorder API');
    }
  };

  return (
    <div>
      <div className='flex flex-row'>
        <div>
          <button className='text-white border-2 m-4 p-4 rounded-lg' onClick={handleRecordAudio}>Record Audio</button>
          {audioUrl && (
            <audio controls>
              <source src={audioUrl} type="audio/wav" />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiRequest;