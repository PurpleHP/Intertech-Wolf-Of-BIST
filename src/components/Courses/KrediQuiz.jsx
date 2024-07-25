import React, { useState, useEffect } from 'react';

import useTestApi from './TestApi';

const FinansalOkuryazarliginTemelleriQuiz = () => {

    const { quizParagraphs, quizAnswers } = useTestApi(14);

    

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(100); // Quiz Suresi

    const questions = [
    ]

    questions.push(...quizParagraphs)

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(timerInterval);
                    setShowScore(true);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='app min-h-screen flex flex-col items-center justify-center text-white' style={{ backgroundColor: '#2b3236' }}>
            {!showScore && timer > 0 && (
                <div className="timer-section absolute top-0 left-0 m-4 px-2 py-1 bg-gray-800 rounded-md">
                    Kalan zaman: {timer} saniye
                </div>
            )}
            {showScore ? (
                <>
                    <div className='score-section animate-pulse text-3xl'>
                        Toplam {questions.length} sorudan {score} doğru cevap verdiniz.
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <button
                            onClick={() => window.location.href = '/chatbot'}
                            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109]"
                        >
                            ChatBot'a Soru Sor
                        </button>
                        <button
                            onClick={() => window.location.href = '/home'}
                            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109]"
                        >
                            Ana Sayfaya Dön
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className='question-section text-center mb-8'>
                        <div className='question-count text-lg mb-2'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text text-2xl'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section grid grid-cols-1 gap-4 w-full max-w-md'>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                className="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#65B741] bg-[#161A1D]"
                                style={{ transition: 'background-color 0.5s ease' }}
                            >
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default FinansalOkuryazarliginTemelleriQuiz;