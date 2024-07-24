import React, { useState, useEffect } from 'react';

const questions = [
    {
        questionText: 'Risk nedir?',
        answerOptions: [
            { answerText: 'Bir yatırımın beklenen getirilerinin gerçekleşmeme olasılığı', isCorrect: true },
            { answerText: 'Bir şirketin yıllık karı', isCorrect: false },
            { answerText: 'Vergi oranı', isCorrect: false },
            { answerText: 'Gelir fazlası', isCorrect: false },
        ],
    },
    {
        questionText: 'Piyasa riski nedir?',
        answerOptions: [
            { answerText: 'Piyasa koşullarının değişmesiyle yatırım değerinin düşme riski', isCorrect: true },
            { answerText: 'Bir şirketin pazar payı', isCorrect: false },
            { answerText: 'Bir yatırım fonunun getirisi', isCorrect: false },
            { answerText: 'Gelir vergisi oranı', isCorrect: false },
        ],
    },
    {
        questionText: 'Kredi riski nedir?',
        answerOptions: [
            { answerText: 'Borç alan tarafın borcunu geri ödeyememe riski', isCorrect: true },
            { answerText: 'Faiz oranlarının düşme riski', isCorrect: false },
            { answerText: 'Enflasyonun yükselme riski', isCorrect: false },
            { answerText: 'Bir şirketin hisse senedi değeri', isCorrect: false },
        ],
    },
    {
        questionText: 'Likidite riski nedir?',
        answerOptions: [
            { answerText: 'Bir varlığın hızlı ve makul bir fiyatla nakde çevrilememesi riski', isCorrect: true },
            { answerText: 'Uzun vadeli yatırımların risk düzeyi', isCorrect: false },
            { answerText: 'Yatırım fonlarının performans riski', isCorrect: false },
            { answerText: 'Birikim hesabındaki para', isCorrect: false },
        ],
    },
    {
        questionText: 'Faiz oranı riski nedir?',
        answerOptions: [
            { answerText: 'Faiz oranlarının değişmesiyle yatırımın değer kaybetme riski', isCorrect: true },
            { answerText: 'Enflasyonun artma riski', isCorrect: false },
            { answerText: 'Gelir vergisi oranı', isCorrect: false },
            { answerText: 'Borçların toplamı', isCorrect: false },
        ],
    },
    {
        questionText: 'Portföy çeşitlendirme nedir?',
        answerOptions: [
            { answerText: 'Yatırımların farklı varlık sınıflarına dağıtılması', isCorrect: true },
            { answerText: 'Yüksek riskli yatırımlara odaklanma', isCorrect: false },
            { answerText: 'Vergi kaçırma stratejisi', isCorrect: false },
            { answerText: 'Borçların yeniden yapılandırılması', isCorrect: false },
        ],
    },
    {
        questionText: 'Risk toleransı nedir?',
        answerOptions: [
            { answerText: 'Bireyin risk alma konusundaki istekliliği ve kapasitesi', isCorrect: true },
            { answerText: 'Faiz oranlarının düşme ihtimali', isCorrect: false },
            { answerText: 'Piyasa dalgalanmalarının etkisi', isCorrect: false },
            { answerText: 'Yatırım portföyünün getirisi', isCorrect: false },
        ],
    },
    {
        questionText: 'Yatırım riski nasıl yönetilir?',
        answerOptions: [
            { answerText: 'Portföyü çeşitlendirerek', isCorrect: true },
            { answerText: 'Sadece bir varlık sınıfına yatırım yaparak', isCorrect: false },
            { answerText: 'Yüksek riskli yatırımlara odaklanarak', isCorrect: false },
            { answerText: 'Vergi oranlarını takip ederek', isCorrect: false },
        ],
    },
    {
        questionText: 'Enflasyon riski nedir?',
        answerOptions: [
            { answerText: 'Enflasyonun yükselmesiyle paranın satın alma gücünün düşme riski', isCorrect: true },
            { answerText: 'Faiz oranlarının düşme riski', isCorrect: false },
            { answerText: 'Bir şirketin büyüme oranı', isCorrect: false },
            { answerText: 'Gelir vergisi oranı', isCorrect: false },
        ],
    },
    {
        questionText: 'Çeşitlendirme neden önemlidir?',
        answerOptions: [
            { answerText: 'Riskin azaltılmasına ve yatırımın korunmasına yardımcı olur', isCorrect: true },
            { answerText: 'Vergi yükünü artırır', isCorrect: false },
            { answerText: 'Yatırımın likiditesini düşürür', isCorrect: false },
            { answerText: 'Sadece kısa vadeli getiriler sağlar', isCorrect: false },
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
                                className="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#E4003A] bg-[#161A1D]"
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
