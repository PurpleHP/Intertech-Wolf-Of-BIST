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
        questionText: 'Hisse senetlerinin değer kazanıp kaybetmesi hangi faktörlere bağlıdır?',
        answerOptions: [
            { answerText: 'Şirketlerin finansal performansı, gelir tabloları ve bilanço durumları', isCorrect: true },
            { answerText: 'Yatırımcıların kişisel tercihlerine', isCorrect: false },
            { answerText: 'Aracı kurumların komisyon oranlarına', isCorrect: false },
            { answerText: 'Merkez bankalarının doğrudan müdahalelerine', isCorrect: false },
        ],
    },
    {
        questionText: 'Tahvillerin fiyatları hangi unsurlara göre belirlenir?',
        answerOptions: [
            { answerText: 'Arz ve talep dengesi', isCorrect: false },
            { answerText: 'Piyasa faiz oranları, ihraç edenin kredi notu ve vade süresi', isCorrect: true },
            { answerText: 'Yatırımcıların portföy tercihleri', isCorrect: false },
            { answerText: 'Şirketlerin kâr marjları ve temettü politikaları', isCorrect: false },
        ],
    },
    {
        questionText: 'Bitcoinin arzı ve fiyatı ile ilgili aşağıdakilerden hangisi doğrudur?',
        answerOptions: [
            { answerText: 'Bitcoinin arzı sınırsızdır ve talebe göre değişir.', isCorrect: false },
            { answerText: 'Bitcoinin toplam arzı 21 milyon adet ile sınırlıdır ve talebe göre fiyatı belirlenir.', isCorrect: true },
            { answerText: 'Bitcoinin arzı hükümetler tarafından kontrol edilir ve fiyatı sabittir.', isCorrect: false },
            { answerText: 'Bitcoinin arzı talebe göre artar ve azalır, fiyatı ise merkez bankaları tarafından belirlenir.', isCorrect: false },
        ],
    },
    {
        questionText: 'Şirket performansının değerlendirilmesinde hangi finansal göstergeler yer almaz?',
        answerOptions: [
            { answerText: 'Gelirler', isCorrect: false },
            { answerText: 'Karlılık oranları', isCorrect: false },
            { answerText: 'Üretim hacmi', isCorrect: true },
            { answerText: 'Borçluluk oranları', isCorrect: false },
        ],
    },
    {
        questionText: 'Aşağıdakilerden hangisi makroekonomik faktörler arasında yer almaz?',
        answerOptions: [
            { answerText: 'Enflasyon oranları', isCorrect: false },
            { answerText: 'Döviz kurları', isCorrect: false },
            { answerText: 'Çalışan performansı', isCorrect: true },
            { answerText: 'Para politikaları', isCorrect: false },
        ],
    },
    {
        questionText: 'Operasyonel göstergeler hangi konuları kapsar?',
        answerOptions: [
            { answerText: 'Şirketin borç/sermaye oranı ve nakit akışı', isCorrect: false },
            { answerText: 'Üretim hacmi, satış performansı, müşteri memnuniyeti ve çalışan verimliliği', isCorrect: true },
            { answerText: 'Rekabet analizi ve düzenleyici ortam', isCorrect: false },
            { answerText: 'Ekonomik büyüme oranları ve faiz oranları', isCorrect: false },
        ],
    },
    {
        questionText: 'Emeklilik hedeflerini finanse etmek için hangi kaynaklardan yararlanılabilir?',
        answerOptions: [
            { answerText: 'Yalnızca Sosyal Güvenlik\'ten.', isCorrect: false },
            { answerText: 'Sosyal Güvenlik, mevcut tasarruf ve yatırımlar, emeklilik maaş planları, Bireysel Emeklilik Planları (BES) ve miras.', isCorrect: true },
            { answerText: 'Emeklilik maaş planları ve Bireysel Emeklilik Planları (BES).', isCorrect: false },
            { answerText: 'Mevcut tasarruf ve yatırımlar ve miras.', isCorrect: false },
        ],
    },
    {
        questionText: 'Halka arz nedir ve nasıl gerçekleştirilir?',
        answerOptions: [
            { answerText: 'Şirketlerin pay senetlerinin veya borçlanma araçlarının halka satılmasıdır; sermaye artırımı veya mevcut hisselerin satışı yoluyla gerçekleştirilir.', isCorrect: true },
            { answerText: 'Şirketlerin sadece borçlanma araçlarının halka satılmasıdır; yalnızca mevcut hisselerin satışı yoluyla gerçekleştirilir.', isCorrect: false },
            { answerText: 'Şirketlerin pay senetlerinin halka satılmasıdır; yalnızca sermaye artırımı yoluyla gerçekleştirilir.', isCorrect: false },
            { answerText: 'Şirketlerin sadece sermaye artırımı yoluyla halka fon sağlamasıdır; sadece borçlanma araçlarının satışı yoluyla gerçekleştirilir.', isCorrect: false },
        ],
    },
    {
        questionText: 'Bireysel Emeklilik Sistemi (BES) nedir?',
        answerOptions: [
            { answerText: 'Kısa vadeli yatırım sistemi', isCorrect: false },
            { answerText: 'Emeklilik dönemi için finansal güvence sağlayan bir tasarruf ve yatırım sistemi', isCorrect: true },
            { answerText: 'Sadece devletin katkı yaptığı bir sistem', isCorrect: false },
            { answerText: 'Bankaların sunduğu bir kredi sistemi', isCorrect: false },
        ],
    },
    {
        questionText: 'Döviz kurları hangi faktörlerden etkilenir?',
        answerOptions: [
            { answerText: 'Yalnızca yerel ekonomik veriler', isCorrect: false },
            { answerText: 'Yalnızca uluslararası ticaret dengesi', isCorrect: false },
            { answerText: 'Hem yerel ekonomik veriler hem de uluslararası ticaret dengesi', isCorrect: true },
            { answerText: 'Sadece merkez bankası politikaları', isCorrect: false },
        ],
    },
    {
        questionText: 'Bir şirketin likidite durumu nedir?',
        answerOptions: [
            { answerText: 'Şirketin borç ödeme kapasitesi', isCorrect: false },
            { answerText: 'Şirketin varlıklarının nakde çevrilme yeteneği', isCorrect: true },
            { answerText: 'Şirketin kâr marjı', isCorrect: false },
            { answerText: 'Şirketin toplam varlık büyüklüğü', isCorrect: false },
        ],
    },
    {
        questionText: 'Şirket değerlemesinde hangi yöntemler kullanılır?',
        answerOptions: [
            { answerText: 'Yalnızca piyasa değerlemesi', isCorrect: false },
            { answerText: 'Yalnızca gelir ve nakit akışları analizi', isCorrect: false },
            { answerText: 'Piyasa değerlemesi, gelir ve nakit akışları analizi, varlık değeri analizi', isCorrect: true },
            { answerText: 'Sadece varlık değeri analizi', isCorrect: false },
        ],
    },
    {
        questionText: 'Bir yatırımın riskini değerlendirmek için hangi yöntemler kullanılır?',
        answerOptions: [
            { answerText: 'Yalnızca geçmiş performans analizi', isCorrect: false },
            { answerText: 'Yalnızca piyasa trendleri', isCorrect: false },
            { answerText: 'Risk ve getiri analizi, piyasa volatilitesi ve geçmiş performans analizi', isCorrect: true },
            { answerText: 'Sadece piyasa volatilitesi', isCorrect: false },
        ],
    },
    {
        questionText: 'Bir yatırımın değerini belirlemek için hangi faktörler göz önünde bulundurulur?',
        answerOptions: [
            { answerText: 'Sadece ekonomik trendler', isCorrect: false },
            { answerText: 'Sadece şirket içi performans', isCorrect: false },
            { answerText: 'Ekonomik trendler, şirket performansı, piyasa koşulları', isCorrect: true },
            { answerText: 'Sadece piyasa koşulları', isCorrect: false },
        ],
    },
    {
        questionText: 'Risk yönetimi nedir ve neden önemlidir?',
        answerOptions: [
            { answerText: 'Yatırımların risklerini azaltma stratejilerinin oluşturulmasıdır; çünkü riskleri azaltarak yatırımın başarısını artırır.', isCorrect: true },
            { answerText: 'Yatırımların getiri oranlarını artırma stratejilerinin oluşturulmasıdır; çünkü sadece getiri oranları önemlidir.', isCorrect: false },
            { answerText: 'Sadece piyasa koşullarını takip etmek ve değiştirmekle ilgilidir; çünkü piyasa koşulları önemlidir.', isCorrect: false },
            { answerText: 'Yatırımın likiditesini artırma stratejileridir; çünkü likidite, risk yönetiminden daha önemlidir.', isCorrect: false },
        ],
    },
    {
        questionText: 'Hangi yatırım aracı düşük risk ve düşük getiri profili sunar?',
        answerOptions: [
            { answerText: 'Hisse senetleri', isCorrect: false },
            { answerText: 'Tahviller', isCorrect: true },
            { answerText: 'Kripto paralar', isCorrect: false },
            { answerText: 'Girişim sermayesi yatırımları', isCorrect: false },
        ],
    },
    {
        questionText: 'Bir finansal planın oluşturulmasında hangi unsurlar dikkate alınır?',
        answerOptions: [
            { answerText: 'Kişisel mali hedefler, risk toleransı, zaman dilimi ve mevcut finansal durum', isCorrect: true },
            { answerText: 'Sadece yatırım araçları', isCorrect: false },
            { answerText: 'Sadece risk toleransı', isCorrect: false },
            { answerText: 'Sadece mevcut finansal durum', isCorrect: false },
        ],
    },
    {
        questionText: 'Portföy çeşitlendirmesi nedir ve neden önemlidir?',
        answerOptions: [
            { answerText: 'Farklı yatırım araçlarına yatırım yaparak riskin yayılmasıdır; çünkü bu strateji riskleri azaltır ve getiri potansiyelini artırır.', isCorrect: true },
            { answerText: 'Sadece tek bir yatırım aracına yatırım yapmaktır; çünkü bu strateji daha yüksek getiri sağlar.', isCorrect: false },
            { answerText: 'Yatırımların tümünü nakit olarak tutmaktır; çünkü bu strateji daha güvenli bir yatırım ortamı sağlar.', isCorrect: false },
            { answerText: 'Yalnızca riskli yatırım araçlarına yatırım yapmaktır; çünkü yüksek risk daha yüksek getiri sağlar.', isCorrect: false },
        ],
    },
    {
        questionText: 'Faiz oranları yükseldiğinde hangi durum söz konusu olabilir?',
        answerOptions: [
            { answerText: 'Kredi maliyetleri artar ve borçlanma azalır', isCorrect: true },
            { answerText: 'Kredi maliyetleri düşer ve borçlanma artar', isCorrect: false },
            { answerText: 'Kredi maliyetleri sabit kalır ve borçlanma etkilenmez', isCorrect: false },
            { answerText: 'Kredi maliyetleri ve borçlanma artar', isCorrect: false },
        ],
    },
    {
        questionText: 'Sermaye piyasaları ile para piyasaları arasındaki fark nedir?',
        answerOptions: [
            { answerText: 'Sermaye piyasaları uzun vadeli yatırımları, para piyasaları ise kısa vadeli yatırımları kapsar.', isCorrect: true },
            { answerText: 'Sermaye piyasaları kısa vadeli yatırımları, para piyasaları ise uzun vadeli yatırımları kapsar.', isCorrect: false },
            { answerText: 'Sermaye piyasaları sadece devlet tahvillerini, para piyasaları ise sadece hisse senetlerini kapsar.', isCorrect: false },
            { answerText: 'Sermaye piyasaları sadece banka mevduatlarını, para piyasaları ise sadece emtiaları kapsar.', isCorrect: false },
        ],
    },
    {
        questionText: 'Ekonomik döngüler nedir ve nasıl etkiler?',
        answerOptions: [
            { answerText: 'Ekonomik döngüler, ekonomik faaliyetlerin yükselme ve düşüş döngüsüdür; ekonomik büyümeyi ve duraklamayı etkiler.', isCorrect: true },
            { answerText: 'Ekonomik döngüler, sadece piyasa trendlerinin değişimidir; yalnızca fiyatları etkiler.', isCorrect: false },
            { answerText: 'Ekonomik döngüler, sadece döviz kurları ile ilgilidir; yalnızca dış ticareti etkiler.', isCorrect: false },
            { answerText: 'Ekonomik döngüler, sadece merkez bankası politikalarının değişimidir; yalnızca para arzını etkiler.', isCorrect: false },
        ],
    },
    {
        questionText: 'Kripto paraların avantajları nelerdir?',
        answerOptions: [
            { answerText: 'Yüksek volatilite ve merkezi kontrol', isCorrect: false },
            { answerText: 'Düşük işlem maliyetleri, yüksek likidite ve merkezi olmayan yapı', isCorrect: true },
            { answerText: 'Yüksek işlem maliyetleri ve düşük likidite', isCorrect: false },
            { answerText: 'Merkezi kontrol ve düşük volatilite', isCorrect: false },
        ],
    },
    {
        questionText: 'Sermaye artırımı nasıl yapılır?',
        answerOptions: [
            { answerText: 'Yeni hisse senedi ihraç edilerek', isCorrect: true },
            { answerText: 'Sadece borçlanarak', isCorrect: false },
            { answerText: 'Sadece tasarrufları artırarak', isCorrect: false },
            { answerText: 'Sadece mevcut hisselerin satışı ile', isCorrect: false },
        ],
    },
    {
        questionText: 'İşletme sermayesi nedir?',
        answerOptions: [
            { answerText: 'Kısa vadeli borçlar', isCorrect: false },
            { answerText: 'Uzun vadeli borçlar', isCorrect: false },
            { answerText: 'Kısa vadeli varlıklar ve kısa vadeli yükümlülükler arasındaki fark', isCorrect: true },
            { answerText: 'Sermaye yatırımları', isCorrect: false },
        ],
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(500); // Quiz duration
    const [quizStarted, setQuizStarted] = useState(false); // Quiz start state

    useEffect(() => {
        let timerInterval;
        if (quizStarted) {
            timerInterval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(timerInterval);
                        setShowScore(true);
                        completeUserEducation();
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
            completeUserEducation();
        }
    };

    const startQuiz = () => {
        setQuizStarted(true);
    };

    const completeUserEducation = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) return;

        let eduIds = [];

        if (score <= 19) {
            eduIds = [1, 4, 7, 9, 10];
        } else if (score >= 20 && score <= 25) {
            eduIds = [1, 4, 7, 9, 10, 11, 12, 13, 14, 15];
        } else {
            eduIds = [1, 4, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        }

        try {
            const promises = eduIds.map(async (eduId) => {
                const response = await fetch('https://financialtrainerfinal120240716125722.azurewebsites.net/api/Education/userEducationComplete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        eduId,
                        userId,
                        RelStatus: ""
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Eğitim ilişkisi eklenemedi: ${eduId}`);
                }

                const data = await response.json();
                console.log("Education Relation Response:\n", data);
                return data;
            });

            await Promise.all(promises);
        } catch (error) {
            console.error('Eğitim ilişkisi eklenirken hata oluştu:', error);
        }
    };

    return (
        <div className='app min-h-screen flex flex-col items-center justify-center text-white' style={{ backgroundColor: '#2b3236' }}>
            {!quizStarted ? (
                <div className='start-quiz-section text-center'>
                    <div className='mb-8 text-3xl'>Seviye belirleme testine başlamak istiyor musunuz? <br></br> Bu testin sonunda finansal bilgi seviyeniz Temel, Orta veya İleri seviye olarak belirlenecektir.</div>
                    <button
                        onClick={startQuiz}
                        className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109] bg-slate-700 text-2xl"
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
                                {score <= 19 ? "Temel Seviye" : score >= 20 && score <= 25 ? "Orta Seviye" : "İleri Seviye"}
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
                                    <span>Soru {currentQuestion + 1}</span>/{questions.length}
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
