import React, { useState } from 'react';

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    // Add more questions here
];

const GelirveVergiYonetimiQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

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
        <div className='app min-h-screen flex flex-col items-center justify-center text-white background-color: #2b3236;'>
            {showScore ? (
                <>
                <div className='score-section animate-pulse text-3xl'>
                    You scored {score} out of {questions.length}
                </div>
                <button
                    onClick={ () => window.location.href = '/chatbot' }
                    className="mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109]"
                >
                    Return to Main Menu
                </button>
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
                                className="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109]  bg-[#161A1D]"
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

export default GelirveVergiYonetimiQuiz;