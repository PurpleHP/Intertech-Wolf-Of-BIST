import React, { useState, useEffect } from 'react';

const questions = [
    {
        questionText: 'Bütçe nedir?',
        answerOptions: [
            { answerText: 'Bir şirketin yıllık karı', isCorrect: false },
            { answerText: 'Gelir ve giderlerin planlandığı mali tablo', isCorrect: true },
            { answerText: 'Yatırım araçlarının listesi', isCorrect: false },
            { answerText: 'Borçların toplamı', isCorrect: false },
        ],
    },
    {
        questionText: 'Faiz oranı nedir?',
        answerOptions: [
            { answerText: 'Yatırımın risk düzeyi', isCorrect: false },
            { answerText: 'Bir borç için ödenen ek ücret', isCorrect: true },
            { answerText: 'Bir şirketin pazar payı', isCorrect: false },
            { answerText: 'Vergi oranı', isCorrect: false },
        ],
    },
    {
        questionText: 'Birikim nedir?',
        answerOptions: [
            { answerText: 'Gelecekte kullanılmak üzere kenara ayrılan para', isCorrect: true },
            { answerText: 'Borç alınan para', isCorrect: false },
            { answerText: 'Günlük harcamalar', isCorrect: false },
            { answerText: 'Acil durum fonu', isCorrect: false },
        ],
    },
    {
        questionText: 'Enflasyon nedir?',
        answerOptions: [
            { answerText: 'Bir şirketin büyüme oranı', isCorrect: false },
            { answerText: 'Para biriminin değer kaybetmesi ve fiyatların yükselmesi', isCorrect: true },
            { answerText: 'Faiz oranlarının düşmesi', isCorrect: false },
            { answerText: 'Bütçe fazlası', isCorrect: false },
        ],
    },
    {
        questionText: 'Diversifikasyon nedir?',
        answerOptions: [
            { answerText: 'Yatırımların farklı alanlara dağıtılması', isCorrect: true },
            { answerText: 'Yüksek riskli yatırımlar', isCorrect: false },
            { answerText: 'Vergi kaçırma', isCorrect: false },
            { answerText: 'Borçların yapılandırılması', isCorrect: false },
        ],
    },
    {
        questionText: 'Net gelir nedir?',
        answerOptions: [
            { answerText: 'Toplam gelirden vergi ve diğer kesintiler düşüldükten sonra kalan miktar', isCorrect: true },
            { answerText: 'Brüt gelir', isCorrect: false },
            { answerText: 'Vergilerden önceki gelir', isCorrect: false },
            { answerText: 'Yatırım gelirleri', isCorrect: false },
        ],
    },
    {
        questionText: 'Likidite nedir?',
        answerOptions: [
            { answerText: 'Bir varlığın hızlı ve kolayca nakde çevrilebilme yeteneği', isCorrect: true },
            { answerText: 'Faiz oranları', isCorrect: false },
            { answerText: 'Uzun vadeli yatırımlar', isCorrect: false },
            { answerText: 'Borçların toplamı', isCorrect: false },
        ],
    },
    {
        questionText: 'Borç nedir?',
        answerOptions: [
            { answerText: 'Ödünç alınan para veya finansal kaynak', isCorrect: true },
            { answerText: 'Birikim hesabındaki para', isCorrect: false },
            { answerText: 'Yatırım geliri', isCorrect: false },
            { answerText: 'Gelir fazlası', isCorrect: false },
        ],
    },
    {
        questionText: 'Tahvil nedir?',
        answerOptions: [
            { answerText: 'Bir şirketin hisse senedi', isCorrect: false },
            { answerText: 'Bir borçlanma aracı', isCorrect: true },
            { answerText: 'Bir yatırım fonu', isCorrect: false },
            { answerText: 'Bir emlak yatırımı', isCorrect: false },
        ],
    },
    {
        questionText: 'Kredi puanı nedir?',
        answerOptions: [
            { answerText: 'Bir kişinin finansal geçmişine dayanarak belirlenen kredi değerliliği', isCorrect: true },
            { answerText: 'Banka hesabındaki bakiye', isCorrect: false },
            { answerText: 'Yatırım portföyü değeri', isCorrect: false },
            { answerText: 'Vergi oranı', isCorrect: false },
        ],
    },
];


const FinansalOkuryazarliginTemelleriQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(100); // Quiz Suresi

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
                                className="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109] bg-[#161A1D]"
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
