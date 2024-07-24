import Footer from "../Footer";
import { useState } from "react";
import "./Course.css";

function GelirveVergiYonetimi() {
    //MARK: Paragraf Bölümü
    const allParagraphs = [
    "Finansal okuryazarlık, bireylerin finansal kararlar alabilme ve bu kararlarin sonuçlarını anlayabilme yeteneğidir. Temel finansal kavramlar ve terimler hakkinda bilgi sahibi olmak, bütçeleme, tasarruf, yatırım ve borç yönetimi gibi konularda bilinçli kararlar almayi sağlar. Bu yetenek, bireylerin mali güvenliklerini artırarak finansal hedeflerine ulaşmalarını destekler.",    
    "Finansal okuryazarlığın temellerini anlamak için bazı temel terimleri bilmek önemlidir. Temel finansal terimler ve kavramlar: \n\n Finans: Paranın yönetimi ve yatırımı ile ilgili işlemler ve kararlar. \n\n Fon: Belirli bir amaç için biriktirilen veya tahsis edilen para. \n\n Sermaye: Bir iş veya yatırım için kullanılan finansal kaynaklar. \n\n Bütçe: Gelir ve giderlerin planlanması ve izlenmesi süreci. \n\n Gelir: Bir birey veya işletmenin kazandığı para. \n\n Gider: Harcamalar ve maliyetler. \n\n Tasarruf: Harcanmayan ve biriktirilen para. \n\n Yatırım: Gelecekteki getiri beklentisiyle yapılan para veya kaynak tahsisi. \n\n Faiz: Borç alınan paranın kullanımı için ödenen ücret. \n\n Kredi: Geri ödeme taahhüdü ile alinan borç para. \n\n Borç: Geri ödenmesi gereken para veya diğer yükümlülükler. \n\n Likidite: Varlıkların hızla ve kolayca nakde çevrilebilme özelliği. \n\n Varlık: Değer tasiyan ve sahip olunan şeyler, örneğin ev, araba, hisse senetleri. \n\n Borç Yükü: Bireyin veya işletmenin toplam borç miktarı. \n\n Nakit Akışı: Gelir ve giderlerin zaman içindeki hareketi. \n\n Enflasyon: Genel fiyat seviyesinin zamanla yükselmesi.",
    "Deflasyon: Genel fiyat seviyesinin zamanla düşmesi. \n\n Borsa: Hisse senetleri ve diğer menkul kıymetlerin alinip satıldığı piyasa. \n\n Tahvil: Bir borçlanma aracıdır; ihraç eden kurumun yatırımcılara belirli bir vadede faiz ödemeyi ve anapara geri ödemeyi taahhüt ettiği finansal araç. \n\n Hisse Senedi: Bir şirketin mülkiyet payını temsil eden menkul kıymet. \n\n Emtia: Altın, petrol gibi fiziksel varlıklar. \n\n Döviz: Farklı ülkelerin para birimleri. \n\n Portföy: Bir yatırımcının sahip olduğu tüm yatırım araçları ve varlıklar. \n\n Çesitlendirme: Yatırımları farklı varlıklara dağıtarak riskin azaltılması. \n\n  Riski Yönetimi: Finansal risklerin tanımlanması, değerlendirilmesi ve kontrol edilmesi süreci. \n\n Vergi: Devlet tarafından gelir, mal veya hizmetler üzerinden alınan zorunlu ödeme. \n\n Menkul Kiymet: Finansal değeri olan belgeler, örneğin hisse senetleri ve tahviller. \n\n Prim: Sigorta poliçesi için ödenen düzenli ödeme. \n\n Marj: Borç para kullanarak yapılan yatırımda, yatırımcının yatırdığı öz kaynak miktarı."
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
        window.location.href = "/FinansalOkuryazarliginTemelleriQuiz";
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
                            <li className={currentParagraph === 0 ? 'text-[#79d866]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#1c8208]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(0)}>Finansal Okuryazarligin Temelleri </button>
                            </li>
                            <li className={currentParagraph === 1 ? 'text-[#79d866]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#1c8208]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(1)}>Finansal Terimler 1</button>
                            </li>
                            <li className={currentParagraph === 2 ? 'text-[#79d866]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#1c8208]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(2)}>Finansal Terimler 2</button>
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
                        Finansal Okuryazarlığın Temelleri
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
