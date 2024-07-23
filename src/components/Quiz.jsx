import React, { useState, useEffect } from 'react';

const questions = [
    {
        questionText: 'Borsada hisse senedi satın almanın amacı nedir?',
        answerOptions: [
            { answerText: 'Para kaybetmek', isCorrect: false },
            { answerText: 'Kar elde etmek', isCorrect: true },
            { answerText: 'Borç almak', isCorrect: false },
            { answerText: 'Vergi ödemek', isCorrect: false },
        ],
    },
    {
        questionText: 'Faiz oranları arttığında, borçlanma maliyeti nasıl etkilenir?',
        answerOptions: [
            { answerText: 'Artar', isCorrect: true },
            { answerText: 'Azalır', isCorrect: false },
            { answerText: 'Değişmez', isCorrect: false },
            { answerText: 'Belirsiz olur', isCorrect: false },
        ],
    },
    {
        questionText: 'Enflasyon nedir?',
        answerOptions: [
            { answerText: 'Para arzının azalması', isCorrect: false },
            { answerText: 'Mal ve hizmet fiyatlarının genel olarak artması', isCorrect: true },
            { answerText: 'İşsizliğin artması', isCorrect: false },
            { answerText: 'Faiz oranlarının düşmesi', isCorrect: false },
        ],
    },
    {
        questionText: 'Bir ülkenin merkez bankası ne yapar?',
        answerOptions: [
            { answerText: 'Vergi toplar', isCorrect: false },
            { answerText: 'Para politikasını belirler', isCorrect: true },
            { answerText: 'Kamu harcamalarını yönetir', isCorrect: false },
            { answerText: 'Hisse senedi satar', isCorrect: false },
        ],
    },
    {
        questionText: 'Yatırım portföyü nedir?',
        answerOptions: [
            { answerText: 'Tek bir hisse senedi yatırımı', isCorrect: false },
            { answerText: 'Farklı yatırım araçlarının bir araya gelmesi', isCorrect: true },
            { answerText: 'Sadece altın yatırımı', isCorrect: false },
            { answerText: 'Sadece döviz yatırımı', isCorrect: false },
        ],
    },
    {
        questionText: 'Döviz kuru nedir?',
        answerOptions: [
            { answerText: 'Bir ülkenin toplam üretimi', isCorrect: false },
            { answerText: 'Bir para biriminin başka bir para birimine göre değeri', isCorrect: true },
            { answerText: 'Bütçe açığı', isCorrect: false },
            { answerText: 'Bir ülkenin borç miktarı', isCorrect: false },
        ],
    },
    {
        questionText: 'Hangi yatırım aracı en düşük riske sahiptir?',
        answerOptions: [
            { answerText: 'Hisse senetleri', isCorrect: false },
            { answerText: 'Devlet tahvilleri', isCorrect: true },
            { answerText: 'Gayrimenkul', isCorrect: false },
            { answerText: 'Kripto paralar', isCorrect: false },
        ],
    },
    {
        questionText: 'Bilanço nedir?',
        answerOptions: [
            { answerText: 'Bir şirketin gelir-gider tablosu', isCorrect: false },
            { answerText: 'Bir şirketin varlık ve borçlarını gösteren finansal tablo', isCorrect: true },
            { answerText: 'Bir şirketin pazarlama stratejisi', isCorrect: false },
            { answerText: 'Bir şirketin müşteri listesi', isCorrect: false },
        ],
    },
    {
        questionText: 'Likidite nedir?',
        answerOptions: [
            { answerText: 'Bir varlığın nakde dönüşme hızı', isCorrect: true },
            { answerText: 'Bir varlığın piyasa değeri', isCorrect: false },
            { answerText: 'Bir varlığın faiz oranı', isCorrect: false },
            { answerText: 'Bir varlığın amortismanı', isCorrect: false },
        ],
    },
    {
        questionText: 'Vadeli mevduat nedir?',
        answerOptions: [
            { answerText: 'Anında çekilebilir banka hesabı', isCorrect: false },
            { answerText: 'Belli bir vade sonunda çekilebilen banka hesabı', isCorrect: true },
            { answerText: 'Hisse senedi yatırım hesabı', isCorrect: false },
            { answerText: 'Kripto para cüzdanı', isCorrect: false },
        ],
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(100); // Quiz duration
    const [quizStarted, setQuizStarted] = useState(false); // Quiz start state

    useEffect(() => {
        let timerInterval;
        if (quizStarted) {
            timerInterval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(timerInterval);
                        setShowScore(true);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerInterval);
    }, [quizStarted]);

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

    const startQuiz = () => {
        setQuizStarted(true);
    };

    return (
        <div className='app min-h-screen flex flex-col items-center justify-center text-white' style={{ backgroundColor: '#2b3236' }}>
            {!quizStarted ? (
                <div className='start-quiz-section text-center'>
                    <div className='mb-8 text-3xl'>Seviye belirleme Quizine başlamak istiyor musunuz?</div>
                    <button
                        onClick={startQuiz}
                        className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109]"
                    >
                        Başla
                    </button>
                </div>
            ) : (
                <>
                    {!showScore && timer > 0 && (
                        <div className="timer-section absolute top-0 left-0 m-4 px-2 py-1 bg-gray-800 rounded-md">
                            Toplam kalan zaman: {timer} saniye
                        </div>
                    )}
                    {showScore ? (
                        <>
                            <div className='score-section animate-pulse text-3xl'>
                                Toplam {questions.length} sorudan {score} doğru cevap verdiniz.
                            </div>
                            <div className="text-2xl mt-4">
                                {score >= 5 && score <= 6 ? "Beginner" : score >= 7 && score <= 9 ? "Advanced" : ""}
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
                                        className="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109] bg-[#161A1D]"
                                        style={{ transition: 'background-color 0.5s ease' }}
                                    >
                                        {answerOption.answerText}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Quiz;
