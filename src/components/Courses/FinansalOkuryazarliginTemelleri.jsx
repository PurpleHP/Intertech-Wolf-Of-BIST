
import Footer from "../Footer";
import { useState } from "react";
import "./Course.css";

import useApiRequest from './CoursesAPI'; // Adjust the import path as necessary

function FinansalOkuryazarliginTemelleri() {
    //MARK: Paragraf Bölümü
    //const { education, Header } = useApiRequest(1);
    const education = []
    const Header = []

    const summary = { title: "Eğitim Denizi Nedir?", index: 0 }; // Özetin indexini 0 olarak ayarlıyoruz.
    const summary2 = { title: "Finansal Okuryazarlık Nedir?", index: 1 }; // Özetin indexini 0 olarak ayarlıyoruz.

    const allParagraphs = [
        " \u2003 Merhaba, Eğitim Denizi platformundaki ilk eğitimine hoş geldin! Eğitim Denizi her seviyesinden finansa meraklı öğrencilerin kendilerini geliştirebilecekleri bir alandır. \n \u2003 Her eğitim modülü, açıklayıcı metinlerinden ve bir adet kısa testten oluşur. Eğitim modüllerine başlamadan önce soldaki menüde bulunan sözlük üzerinden ilgili eğitim için gerekli olan kelimeleri öğrenmelisin. \n \u2003 Bu eğitim modülüne başlamadan önce sözlüğün ilk 10 sayfasını okuduğundan emin ol! Sözlüğü okuduktan sonra İleri butonuna basarak eğitim metnini okumaya başlayabilirsin.", "\u2003 Para, yaşamın sürdürülebilirliği için temel bir gereksinimdir, ancak gelir ve varlık yönetimi konusunda birçok zorlukla karşılaşabiliriz. Modern dünyada, kişisel finansal yönetim becerilerimiz daha önemli hale gelmiştir. Öğrenci kredileri, kredi kartları ve emeklilik planları gibi finansal ürünlerle ilgili kararlar almak, bireysel ve toplumsal refah üzerinde büyük etki yaratır. Finansal okuryazarlık, bu kararları doğru bir şekilde verebilmemiz için gerekli bilgi ve beceriyi kazandırır. \n \u2003 Finansal okuryazarlık, kişisel bütçe yönetimi, tasarruf, yatırım ve risk analizi gibi konuları kapsayan bir bilgi ve uygulama yeteneğidir. Bu beceriyi geliştirmek, harcamalarımızı ve tasarruflarımızı daha bilinçli bir şekilde yönetmemizi sağlar. Aynı zamanda, ekonomik döngüleri anlamamıza ve finansal araçlar hakkında bilgi edinmemize yardımcı olur. \n \u2003 Finansal okuryazarlık, yaşam standartlarımızı iyileştirmek ve mali krizlere karşı direncimizi artırmak için kritik öneme sahiptir. Bütçemizi doğru yönetmek, borçları etkin bir şekilde ödemek ve tasarruf yapma disiplini kazanmak finansal sağlığımızı güçlendirir. Ayrıca, finansal okuryazarlık, günümüzün değişken ekonomik koşullarına uyum sağlama yeteneğimizi geliştirir ve finansal kararlarımıza olumlu yönde katkıda bulunur.",
    ];

    allParagraphs.push(...education);

    const allHeaders = [summary, summary2, ...Header.map((header, index) => ({ ...header, index: index + 1 }))]; // Başlıkların indexlerini 1'den başlatıyoruz.

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
        window.location.href = "/FinansalOkuryazarliginTemelleriQuiz";
    };

    const mainMenu = () => {
        window.location.href = "/home";
    };

    const sozluk = () => {
        window.location.href = "/sozluk";
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
                                <li key={index} className={currentParagraph === header.index ? 'text-[#79d866]' : ''}>
                                    <button className="transform transition duration-500 hover:scale-105 hover:text-[#1c8208]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(header.index)}>{header.title}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="row-start-6 row-span-1 grid grid-cols-2">
                        <button className="col-start-1 col-span-2 border-4 rounded-lg shadow-2xl mb-2 transform transition duration-500 hover:scale-105" onClick={sozluk}>Sözlük</button>
                        <button className="col-start-1 col-span-2 border-4 rounded-lg shadow-2xl mb-2 transform transition duration-500 hover:scale-105" onClick={mainMenu}>Ana Sayfa</button>
                        <button className="col-start-1 col-span-2 border-4 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" onClick={goToQuiz}>Teste Atla</button>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-10 grid-rows-10 p-4 m-4 h-[90vh] rounded-lg text-white border-4 shadow-black shadow-2xl background-color:#2b3236 scrollable-mobile">
                    <p className="title break-words font-bold text-justify rounded-md font-sans col-span-8 row-span-1 col-start-2 p-3 row-start-1 underline" style={{ textDecorationColor: '#79d866', textDecorationThickness: '2px' }}>
                        {currentHeader.title}
                    </p>
                    <p className="break-words text-justify whitespace-pre-line rounded-md font-sans col-span-8 row-span-8 col-start-2 p-3 row-start-2">
                        {paragraphs}
                    </p>

                    {btnNextVisible && (
                        <a onClick={changeParagraph} className="text-white row-start-10 row-end-10 row-span-1 col-start-9 col-span-2 bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2 transform transition duration-500 hover:scale-105 flex justify-center items-center fixed-button-ileri cursor-pointer">İleri</a>
                    )}
                    {btnQuizVisible && (
                        <a onClick={goToQuiz} className="text-white row-start-10 row-end-10 row-span-1 col-start-9 col-span-2 bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2 transform transition duration-500 hover:scale-105 flex justify-center items-center fixed-button-ileri cursor-pointer">Quize git</a>
                    )}
                    {btnPrevVisible && (
                        <a onClick={changeToPrevParagraph} className="text-white row-start-10 row-end-10 row-span-1 col-start-1 col-span-2 bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2 transform transition duration-500 hover:scale-105 flex justify-center items-center fixed-button-geri cursor-pointer">Geri</a>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default FinansalOkuryazarliginTemelleri;
