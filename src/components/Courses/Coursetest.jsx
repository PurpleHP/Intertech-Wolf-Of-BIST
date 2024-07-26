import React, { useState, useEffect } from 'react';
import Footer from "../Footer";
import "./Course.css";
import "./style.css"; // Import the styles

function Banank() {
    // MARK: Paragraf Bölümü

    const allParagraphs = [
        "1Gelir ve Vergi Yönetimi dersi, gelir ve vergi konularında temel bilgileri içerir...",
        "2Gelir ve Vergi Yönetimi dersi, gelir ve vergi konularında temel bilgileri içerir...",
        "3Gelir ve Vergi Yönetimi dersi, gelir ve vergi konularında temel bilgileri içerir...",
        "4Gelir ve Vergi Yönetimi dersi, gelir ve vergi konularında temel bilgileri içerir...",
        "5Gelir ve Vergi Yönetimi dersi, gelir ve vergi konularında temel bilgileri içerir...",
    ];

    const summary = { title: "Gelir ve Vergi Yönetimi Özet", index: 0 };

    const Header = [
        { title: "Maliyet Muhasebesi Özet", index: 1 },
        { title: "Finansal Yönetim Özet", index: 2 },
        { title: "İşletme Yönetimi Özet", index: 3 },
        { title: "Pazarlama Yönetimi Özet", index: 4 }
    ];

    const allHeaders = [summary, ...Header.map((header, index) => ({ ...header, index: index + 1 }))];

    const [paragraphs, setParagraphs] = useState([allParagraphs[0]]);
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [btnNextVisible, setBtnNextVisible] = useState(true);
    const [btnPrevVisible, setBtnPrevVisible] = useState(false);
    const [btnQuizVisible, setBtnQuizVisible] = useState(false);

    useEffect(() => {
        const pages = document.getElementsByClassName('page');
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            if (i % 2 === 0) {
                page.style.zIndex = (pages.length - i);
            }
        }

        for (let i = 0; i < pages.length; i++) {
            pages[i].pageNum = i + 1;
            pages[i].onclick = function () {
                if (this.pageNum % 2 === 0) {
                    this.classList.remove('flipped');
                    this.previousElementSibling.classList.remove('flipped');
                } else {
                    this.classList.add('flipped');
                    this.nextElementSibling.classList.add('flipped');
                }
            }
        }
    }, []);

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

    const skipTheQuiz = () => {
        window.location.href = "/home";
    };

    const goToQuiz = () => {
        window.location.href = "/GelirveVergiYonetimiQuiz";
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
                    <div className="book px-20 py-8">
                        <div id="pages" className="pages">
                            {allParagraphs.map((paragraph, index) => (
                                <div key={index} className="page"><p className="patates">{paragraph}</p></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Banank;