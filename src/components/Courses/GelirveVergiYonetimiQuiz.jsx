import React, { useState, useEffect } from 'react';
import useAnswerApi from './AnswerApi';

const GelirveVergiYonetimiQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(60); // Quiz Süresi
    const [questions, setQuestions] = useState([]); // STATE FOR QUESTIONS
    const [quizReady, setQuizReady] = useState(false);
    const [quizIds, setQuizIds] = useState([]);
    const [quizAnswers, setQuizAnswers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const raw = JSON.stringify({ "eduId": 14 });

                const requestOptions = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: raw,
                    redirect: "follow"
                };

                const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Quiz/getQuizzesByEducationId';
                const response = await fetch(targetUrl, requestOptions);
                const data = await response.json();

                if (data && Array.isArray(data)) {
                    console.log(data);
                    let paragraphs = [];
                    let answers = [];
                    let id = [];
                    for (let i = 0; i < data.length; i++) {
                        paragraphs.push(data[i].question);
                        answers.push(data[i].option_a);
                        answers.push(data[i].option_b);
                        answers.push(data[i].option_c);
                        answers.push(data[i].option_d);
                        id.push(data[i].quizId);
                    }
                    setQuizIds(id);

                    let questions = [];
                    for (let i = 0; i < paragraphs.length; i++) {
                        questions.push({
                            questionText: paragraphs[i],
                            answerOptions: [
                                { answerText: answers[i * 4], letter: "a" },
                                { answerText: answers[i * 4 + 1], letter: "b" },
                                { answerText: answers[i * 4 + 2], letter: "c" },
                                { answerText: answers[i * 4 + 3], letter: "d" }
                            ]
                        });
                    }
                    setQuestions(questions);
                    setQuizReady(true);
                } else {
                    console.error('Data is not an array or is null');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData(); // Call fetchData when the component mounts or eduId changes
    }, []);

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const raw = JSON.stringify({ "quizId": quizIds[currentQuestion] });

                const requestOptions = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: raw,
                    redirect: "follow"
                };

                const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Quiz/getQuizzAnswersByQuizId';
                const response = await fetch(targetUrl, requestOptions);
                const data = await response.json();
                setQuizAnswers(data[0].answer);
            } catch (error) {
                setError(error.message);
            }
        };

        if (quizIds && quizIds.length > 0) {
            fetchAnswers();
        }
    }, [currentQuestion, quizIds]);

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

    const handleAnswerClick = (answerLetter) => {
        if (quizAnswers && answerLetter === quizAnswers) {
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
        <div>
            {quizReady ? (
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
                                    AI Bot'a Soru Sor
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
                                    <span>Soru {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text text-2xl'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section grid grid-cols-1 gap-4 w-full max-w-md'>
                                {questions[currentQuestion].answerOptions.map((e, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(e.letter)}
                                        className="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109] bg-[#161A1D]"
                                        style={{ transition: 'background-color 0.5s ease' }}
                                    >
                                        {e.answerText}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <div class="bg-black flex items-center justify-center w-screen h-screen">
                    <img width={100} src='src\assets\loading.gif' alt="Loading animation" />
                </div>

            )}
        </div>
    );
};

export default GelirveVergiYonetimiQuiz;
