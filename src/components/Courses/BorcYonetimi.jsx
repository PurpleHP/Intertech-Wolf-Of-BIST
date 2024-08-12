import Footer from "../Footer";
import { useState } from "react";
import "./Course.css";

import useApiRequest from './CoursesAPI'; // Adjust the import path as necessary

function BorcYonetimi() {
    //MARK: Paragraf Bölümü
    const { education, Header } = useApiRequest(11);
    
    const summary = { title: "Borç Yönetimi Özet", index: 0 }; // Özetin indexini 0 olarak ayarlıyoruz.
    
    const allParagraphs = [
        "Borç yönetimi, bireylerin ve ailelerin finansal yükümlülüklerini etkin bir şekilde planlama, takip etme ve kontrol etme sürecidir. Bu süreç, borçların zamanında ödenmesini, faiz yüklerinin azaltılmasını ve mali güvenliğin korunmasını sağlar. Borç yönetimi, finansal sağlığı iyileştirmek ve mali krizleri önlemek için kritik öneme sahiptir.",
    ];

    allParagraphs.push(...education);    

    const allHeaders = [summary, ...Header.map((header, index) => ({ ...header, index: index + 1 }))]; // Başlıkların indexlerini 1'den başlatıyoruz.

    const [paragraphs, setParagraphs] = useState([allParagraphs[0]]);
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [btnNextVisible, setBtnNextVisible] = useState(true);
    const [btnPrevVisible, setBtnPrevVisible] = useState(false);
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
        if (index === 0) {
            setParagraphs([allParagraphs[0]]);
        } else {
            setParagraphs([allParagraphs[index]]);
        }
        setCurrentParagraph(index);
        setBtnNextVisible(index < allParagraphs.length - 1);
        setBtnPrevVisible(index > 0);
        setBtnQuizVisible(index === allParagraphs.length - 1);
    };

    const skipTheQuiz = () => { //post request atılacak kursu skip etmek için
        window.location.href = "/home";
    };

    const goToQuiz = () => {
        window.location.href = "/BorcYonetimiQuiz"; //Quiz eklenecek
    };

    const mainMenu = () => {
        window.location.href = "/home";
    };

    // Geçerli paragrafa ait başlığı al
    const currentHeader = allHeaders.find(header => header.index === currentParagraph) || summary;

    return (
        <div>
            <div className="items-center justify-center grid grid-cols-4 gap-x-4 gap-y-2">
                <div className="col-span-1 grid grid-rows-6 p-4 m-4 h-[90vh] rounded-lg font-bold text-[20px] text-white font-sans border-4 break-words border-white shadow-black shadow-2xl background-color:#2b3236 hidden-mobile">
                    <div className="row-span-4 row-start-1 text-left items-start">
                        <ul>
                            {allHeaders.map((header, index) => (
                                <li key={index} className={currentParagraph === header.index ? 'text-[#FFB22C]' : ''}>
                                    <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(header.index)}>{header.title}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="row-start-6 row-span-1 grid grid-cols-2">
                        <button className="col-start-1 col-span-2 border-4 rounded-lg shadow-2xl mb-2 transform transition duration-500 hover:scale-105" onClick={mainMenu}>Ana Sayfa</button>
                        <button className="col-start-1 col-span-2 border-4 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" onClick={goToQuiz}>Teste Atla</button>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-10 grid-rows-10 p-4 m-4 h-[90vh] rounded-lg text-white border-4 shadow-black shadow-2xl background-color:#2b3236 scrollable-mobile">
                    <p className="title break-words font-bold text-justify rounded-md font-sans col-span-8 row-span-1 col-start-2 p-3 row-start-1 underline" style={{ textDecorationColor: '#FFB22C', textDecorationThickness: '2px' }}>
                        {currentHeader.title}
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

                    
                    {(
                        <a onClick={mainMenu} className="text-white row-start-10 row-end-10 row-span-1 col-start-1 col-span-2 bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2 transform transition duration-500 hover:scale-105 flex justify-center items-center fixed-button-anasayfa">Ana Sayfa</a>
                    )}


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default BorcYonetimi;
