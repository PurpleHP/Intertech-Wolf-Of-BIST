import React, { useState } from 'react';

function CircularProgressBar({ progress }) {

    //const [progress, setProgress] = useState(0);


    const radius = 70; // Radius of the circle
    const stroke = 10; // Stroke width
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    /*
    const IncreaseProgress = () => {
        setProgress((currentProgress) => {
            let newProgress =currentProgress + 100/14;
            if(newProgress >= 98) {
                newProgress = 100;
            }
            return newProgress > 100 ? 100 : newProgress; 
        });
    }*/

    const IncreaseProgress = () => {
            let progress =progress + 100/14;
            if(progress >= 98) {
                progress = 100;
            }
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