import Footer from "../Footer";
import { useState } from "react";
import "./Course.css";

function GelirveVergiYonetimi() {
    //MARK: Paragraf Bölümü
    const allParagraphs = [
        "Finansal okuryazarlık, bireylerin finansal kararlar alırken riskleri anlamalarını ve yönetmelerini sağlar. Risk, bir yatırımın beklenen getirilerinin gerçekleşmeme olasılığıdır ve her türlü finansal karar bir miktar risk içerir. Bu riskler, yatırımın türüne, piyasa koşullarına ve bireyin risk toleransına bağlı olarak değişebilir.",
        "Yatırım riskleri, farklı şekillerde ortaya çıkabilir. Örneğin, hisse senedi yatırımları piyasa dalgalanmalarına maruz kalabilir, bu da hisse senedi fiyatlarının hızla düşebileceği anlamına gelir. Tahvil yatırımları, faiz oranlarındaki değişikliklerden etkilenebilir ve faiz oranları yükseldiğinde tahvil fiyatları düşebilir.",
        "Bireylerin finansal riskleri yönetmek için çeşitli stratejileri vardır. Portföy çeşitlendirme, risk yönetiminde yaygın bir yaklaşımdır. Farklı varlık sınıflarına yatırım yaparak, bir varlığın kötü performansı diğerlerinin iyi performansı ile dengelenebilir. Bunun yanı sıra, riskleri minimize etmek için finansal danışmanlardan yardım almak ve düzenli olarak finansal planlama yapmak da önemlidir.",
        "Sonuç olarak, finansal okuryazarlık, bireylerin riskleri anlamalarına ve uygun önlemler almalarına yardımcı olur. Riskler tamamen ortadan kaldırılamasa da, iyi bir finansal bilgiye sahip olmak, bireylerin daha bilinçli ve güvenli finansal kararlar almasını sağlar."
    ];
    

    const [paragraphs, setParagraphs] = useState([allParagraphs[0]]); //paragrafı değiştirmek için
    const [currentParagraph, setCurrentParagraph] = useState(0); //hangi paragrafta olduğumuzu belirtmek için
    const [btnNextVisible, setBtnNextVisible] = useState(true); //ileri butonunu göstermek için
    const [btnPrevVisible, setBtnPrevVisible] = useState(false); //geri butonunu göstermek için
    const [btnQuizVisible, setBtnQuizVisible] = useState(false);

    const changeParagraph = () => {
        if (currentParagraph < allParagraphs.length - 1) {
            const nextParagraph = currentParagraph + 1;
            setCurrentParagraph(nextParagraph);
            setParagraphs([allParagraphs[nextParagraph]]);
            
            if (nextParagraph === allParagraphs.length - 1) {
                setBtnNextVisible(false);
                setBtnQuizVisible(true);
            } else {
                setBtnNextVisible(true);
                setBtnQuizVisible(false);
            }

            if (nextParagraph > 0) {
                setBtnPrevVisible(true);
            }
        }
    };

    const changeToPrevParagraph = () => {
        if (currentParagraph > 0) {
            const prevParagraph = currentParagraph - 1;
            setCurrentParagraph(prevParagraph);
            setParagraphs([allParagraphs[prevParagraph]]);

            if (prevParagraph === 0) {
                setBtnPrevVisible(false);
            }

            if (prevParagraph < allParagraphs.length - 1) {
                setBtnNextVisible(true);
                setBtnQuizVisible(false);
            }
        }
    };

    const handleSetParagraph = (index) => {
        setParagraphs([allParagraphs[index]]);
        setCurrentParagraph(index);
        setBtnNextVisible(index < allParagraphs.length - 1);
        setBtnPrevVisible(index > 0);
        setBtnQuizVisible(index === allParagraphs.length - 1);
    };

    const skipTheQuiz = () => { //post request atılacak kursu skip etmek için
        window.location.href = "/home";
    };

    const goToQuiz = () => {
        window.location.href = "/RiskQuiz";
    };

    const mainMenu = () => {
        window.location.href = "/home";
    };

    return (
        <div>
            <div className="items-center justify-center grid grid-cols-4 gap-x-4 gap-y-2">
                <div className="col-span-1 grid grid-rows-6 p-4 m-4 h-[90vh] rounded-lg font-bold text-[20px] text-white font-sans border-4 break-words border-white shadow-black shadow-2xl background-color:#2b3236 hidden-mobile">
                    <div className="row-span-4 row-start-1 text-left items-start">
                        <ul>
                            <li className={currentParagraph === 0 ? 'text-[#EE4E4E]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#C80036]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(0)}>Riskin Tanımı ve Önemi</button>
                            </li>
                            <li className={currentParagraph === 1 ? 'text-[#EE4E4E]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#C80036]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(1)}>Yatırım Riskleri</button>
                            </li>
                            <li className={currentParagraph === 2 ? 'text-[#EE4E4E]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#C80036]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(2)}>Risk Yönetim Stratejileri</button>
                            </li>
                            <li className={currentParagraph === 3 ? 'text-[#EE4E4E]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#C80036]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(3)}>Risk Yönetim Stratejileri</button>
                            </li>
                        </ul>
                    </div>
                    <div className="row-start-6 row-span-1 grid grid-cols-2">
                        <button className="col-start-1 col-span-2 border-4 rounded-lg shadow-2xl mb-2 transform transition duration-500 hover:scale-105" onClick={mainMenu}>Ana Sayfa</button>
                        <button className="col-start-1 col-span-2 border-4 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" onClick={goToQuiz}>Teste Atla</button>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-10 grid-rows-10 p-4 m-4 h-[90vh] rounded-lg text-white border-4 shadow-black shadow-2xl background-color:#2b3236 scrollable-mobile">
                    <p className="title break-words font-bold text-justify rounded-md font-sans col-span-8 row-span-1 col-start-2 p-3 row-start-1">
                        Risk
                    </p>
                    <p className="break-words text-justify whitespace-pre-line rounded-md font-sans col-span-8 row-span-8 col-start-2 p-3 row-start-2">
                        {paragraphs}
                    </p>

                    {btnNextVisible && (
                        <a onClick={changeParagraph} className="text-white row-start-10 row-end-10 row-span-1 col-start-9 col-span-2 bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2 transform transition duration-500 hover:scale-105 flex justify-center items-center fixed-button-ileri">İleri</a>
                    )}
                    {btnQuizVisible && (
                        <a onClick={goToQuiz} className="text-white row-start-10 row-end-10 row-span-1 col-start-9 col-span-2 bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2 transform transition duration-500 hover:scale-105 flex justify-center items-center fixed-button-ileri">Quize git</a>
                    )}
                    {btnPrevVisible && (
                        <a onClick={changeToPrevParagraph} className="text-white row-start-10 row-end-10 row-span-1 col-start-1 col-span-2 bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2 transform transition duration-500 hover:scale-105 flex justify-center items-center fixed-button-geri">Geri</a>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default GelirveVergiYonetimi;
