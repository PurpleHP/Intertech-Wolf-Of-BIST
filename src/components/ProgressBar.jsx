import React, { useState, useEffect } from 'react';

function CircularProgressBar() {


    const [progress, setProgress] = useState(0);

    const radius = 70; 
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        const fetchData = async () => {

            const storedUserId = localStorage.getItem('userId');

            try {
                const raw = JSON.stringify({ "userId": storedUserId });
        
                const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: raw,
                redirect: "follow"
                };
        
                const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Education/getEducationByUser';
                const response = await fetch(targetUrl, requestOptions);
                const data = await response.json();
                for (let i = 0; i < data.length; i++) {
                    if(data[i].progress === "DONE"){
                        IncreaseProgress();
                    }
                    
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        fetchData();
        
      }, []);

    const IncreaseProgress = () => {
            let progress =progress + 100/14;
            if(progress >= 98) {
                progress = 100;
            }
            setProgress(progress);
            return progress > 100 ? 100 : progress; 
    }

    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <svg height={radius * 2} width={radius * 2}>
                    <circle
                    stroke={
                        progress < 30 ? '#0f0' : progress < 70 ? '#f50' : progress == 100? '#0ff': '#f00'
                    }
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    />
                    <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" dy=".3em">
                    {`${Math.floor(progress)}%`}
                    </text>
                </svg>
                </div>
      
    );
  }
  
  export default CircularProgressBar;