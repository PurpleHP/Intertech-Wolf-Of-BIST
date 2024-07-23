import Footer from "../Footer";
import { useState } from "react";
import "./Gelir.css";

function GelirveVergiYonetimi() {
    //MARK: Paragraf Bölümü
    const allParagraphs = [
        "Gelir kaynakları, bireylerin veya ailelerin yaşam giderlerini karşılamak için elde ettikleri finansal kaynaklardır. Gelir kaynakları farklı kategorilere ayrılabilir:\n1.	Aktif Gelir: Bu, bir kişinin aktif olarak çalışarak kazandığı gelirdir. Maaş, ücret, komisyon ve serbest meslek kazançları bu kategoriye girer. Aktif gelir, sürekli çalışmayı gerektirir. \n 2.	Pasif Gelir: Bu, bireyin aktif olarak çalışmadan kazandığı gelirdir. Kiralık mülklerden elde edilen kira gelirleri, telif hakları, patent gelirleri ve yatırım gelirleri pasif gelir kaynaklarına örnektir. Pasif gelir, zaman içinde artabilir ve mali bağımsızlık sağlamada önemli bir rol oynar.\n3.	Portföy Geliri: Bu gelir, yatırım faaliyetlerinden elde edilir. Hisse senetleri, tahviller, yatırım fonları ve diğer finansal araçlardan elde edilen gelirler portföy geliri olarak sınıflandırılır. Portföy geliri, yatırımın getirisini yansıtır ve finansal planlamada önemli bir unsurdur.\n4.	Emeklilik Geliri: Emeklilik planları ve sosyal güvenlik ödemeleri gibi kaynaklardan elde edilen gelirlerdir. Bu gelirler, bireylerin emeklilik döneminde mali güvence sağlamalarına yardımcı olur.",
        "Vergi, devletin kamu hizmetlerini finanse etmek için bireylerden ve kurumlardan topladığı zorunlu bir ödemedir. Vergiler, ekonomik dengeyi sağlamak, kamu hizmetlerini finanse etmek ve gelir dağılımını düzenlemek için kullanılır. İşte bazı temel vergi türleri:\n1.	Gelir Vergisi: Bireylerin ve kurumların elde ettikleri gelir üzerinden ödedikleri vergidir. Gelir vergisi, genellikle belirli bir oran üzerinden hesaplanır ve yıllık olarak beyan edilir.\n2.	Katma Değer Vergisi (KDV): Mal ve hizmetlerin satışından alınan bir vergidir. KDV, tüketici tarafından ödenir ve satıcı tarafından devlete iletilir.\n3.	Kurumlar Vergisi: Şirketlerin elde ettikleri kâr üzerinden ödedikleri vergidir. Kurumlar vergisi, şirketlerin mali performansını yansıtır ve yıllık olarak beyan edilir.\n4.	Emlak Vergisi: Gayrimenkul sahiplerinin mülkleri üzerinden ödedikleri vergidir. Emlak vergisi, mülkün değerine göre hesaplanır ve genellikle yıllık olarak ödenir.",
        "Vergi Beyanı Nedir? Vergi beyanı, bireylerin ve kurumların elde ettikleri gelirler, yaptıkları harcamalar ve diğer mali işlemler hakkında devlete bilgi verdikleri bir rapordur. Vergi beyanı, yıllık olarak hazırlanır ve gelir, gider, vergi indirimleri ve vergi borçlarının hesaplanmasını içerir. Beyan edilen bu bilgiler doğrultusunda, devlet vergi yükümlülüklerini belirler ve tahsil eder.Vergi Türleri\nVergi türleri, devletin çeşitli mali kaynaklardan elde ettiği gelirleri ifade eder. İşte bazı yaygın vergi türleri:\n1.	Gelir Vergisi: Bireylerin ve kurumların yıllık gelirlerinden alınan vergidir.\n2.	Katma Değer Vergisi (KDV): Mal ve hizmet satışlarından alınan bir tüketim vergisidir.\n3.	Kurumlar Vergisi: Şirketlerin elde ettikleri kârlardan alınan vergidir.\n4.	Emlak Vergisi: Gayrimenkul sahiplerinin mülk değerleri üzerinden ödedikleri vergidir.\n5.	Özel Tüketim Vergisi (ÖTV): Belirli malların tüketiminden alınan bir vergidir, genellikle lüks ürünler, akaryakıt ve tütün ürünleri üzerinde uygulanır.",
        "Vergi beyannamesi hazırlamak, belirli adımları takip etmeyi gerektirir:\n1.	Gelirlerin Belirlenmesi: Yıl boyunca elde edilen tüm gelir kaynaklarını tespit edin. Bu, maaş, kira gelirleri, yatırım kazançları gibi çeşitli kaynaklardan elde edilen gelirleri içerir.\n2.	Giderlerin Belirlenmesi: Vergi indirimlerine tabi olan tüm giderleri belirleyin. Bu, sağlık harcamaları, eğitim giderleri ve bağışları içerebilir.\n3.	Vergi Matrahının Hesaplanması: Gelirler ve giderler arasındaki farkı hesaplayarak vergi matrahını bulun.\n4.	Vergi Oranının Uygulanması: Vergi matrahı üzerinden geçerli vergi oranlarını uygulayarak ödenecek vergi miktarını hesaplayın.\n5.	Vergi Beyannamesinin Doldurulması: Tüm bu bilgileri vergi beyannamesi formuna işleyin ve gerekli belgeleri ekleyin.\n6.	Beyannamenin Sunulması: Vergi beyannamesini ilgili vergi dairesine zamanında sunun.",
        "Vergi indirimleri ve istisnalar, vergi yükünü hafifletmek için kullanılan yasal düzenlemelerdir. İşte bazı yaygın vergi indirimleri ve istisnalar:\n1.	Sağlık Harcamaları: Sağlık giderleri, belirli bir oranda vergi matrahından düşülebilir.\n2.	Eğitim Giderleri: Eğitim harcamaları, belirli koşullar altında vergi indirimine tabi olabilir.\n3.	Bağışlar ve Yardımlar: Onaylanmış vakıflara ve derneklere yapılan bağışlar, vergi indirimine hak kazanabilir.\n4.	Konut Kredisi Faizleri: Konut kredisi faiz ödemeleri, belirli bir oranda vergi indirimine tabi olabilir.\n5.	Çocuk ve Aile Yardımları: Çocuk bakımı ve aile yardımları için yapılan harcamalar, vergi indirimine konu olabilir.",
        "Vergi beyanı ve indirimlerinin doğru bir şekilde uygulanması, vergi yükümlülüklerinizi azaltmanıza ve mali sağlığınızı korumanıza yardımcı olabilir. İşte bazı uygulama ipuçları:\n1.	Düzenli Kayıt Tutma: Yıl boyunca gelir ve giderlerinizi düzenli olarak kaydedin.\n2.	Vergi Danışmanlığı: Karmaşık vergi konularında profesyonel yardım alın.\n3.	Yasal Uyum: Vergi indirimleri ve istisnalarını kullanırken yasal düzenlemelere tam uyum sağlayın.\n4.	Vergi Planlaması: Yıllık vergi yükümlülüklerinizi azaltmak için stratejik vergi planlaması yapın.",
        "Gelir Vergisi\nGelir vergisi, bireylerin ve kurumların elde ettikleri gelir üzerinden ödedikleri bir vergidir. Gelir vergisinin bazı avantajları şunlardır:\n1.	Gelir Dağılımı Adaleti: Gelir vergisi, gelir dağılımını daha adil hale getirmek için kullanılır. Daha yüksek gelirli bireyler daha yüksek oranlarda vergi öder, bu da toplumsal dengeyi sağlar.\n2.	Devlet Geliri: Gelir vergisi, devletin kamu hizmetlerini finanse etmesi için önemli bir gelir kaynağıdır. Eğitim, sağlık ve altyapı projeleri gibi kamu hizmetleri bu vergi ile finanse edilir.\n3.	Ekonomik İstikrar: Gelir vergisi, ekonomik istikrarı sağlamak için kullanılır. Devlet, gelir vergisi gelirlerini kullanarak ekonomik dalgalanmaları dengeleyebilir ve ekonomik büyümeyi teşvik edebilir.",
        "Katma Değer Vergisi (KDV), mal ve hizmetlerin satışından alınan bir tüketim vergisidir. KDV'nin bazı avantajları şunlardır:\n1.	Geniş Vergi Tabanı: KDV, geniş bir vergi tabanına sahiptir çünkü tüketim üzerinden alınır. Bu, devletin gelirlerini artırır ve mali kaynaklarını çeşitlendirir.\n2.	Tahsilat Kolaylığı: KDV, satıcılar tarafından tahsil edilir ve devlete iletilir. Bu, vergi tahsilat sürecini kolaylaştırır ve etkinliğini artırır.\n3.	Tüketim Teşviki: KDV, tüketim davranışlarını etkileyerek ekonomik büyümeyi teşvik edebilir. Düşük KDV oranları, tüketimi artırabilir ve ekonomik canlanmayı destekleyebilir.\n\nKurumlar vergisi, şirketlerin elde ettikleri kâr üzerinden ödedikleri bir vergidir. Kurumlar vergisinin bazı avantajları şunlardır:\n1.	Adil Rekabet: Kurumlar vergisi, şirketler arasında adil rekabeti teşvik eder. Tüm şirketler, kârları üzerinden vergi ödemek zorunda olduğundan, rekabet ortamı daha adil hale gelir.\n2.	Devlet Geliri: Kurumlar vergisi, devletin kamu hizmetlerini finanse etmesi için önemli bir gelir kaynağıdır. Bu vergi, altyapı projeleri, sağlık ve eğitim gibi alanlarda kullanılabilir.\n3.	Şirket Sorumluluğu: Kurumlar vergisi, şirketlerin topluma karşı mali sorumluluklarını yerine getirmesini sağlar. Şirketler, elde ettikleri kârlardan vergi ödeyerek topluma katkıda bulunur.",
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
                            <li className={currentParagraph === 0 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(0)}>Gelir Kaynakları ve Çeşitleri</button>
                            </li>
                            <li className={currentParagraph === 1 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(1)}>Vergi Temel Bilgileri</button>
                            </li>
                            <li className={currentParagraph === 2 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(2)}>Vergi Beyanı ve İndirimler</button>
                            </li>
                            <li className={currentParagraph === 3 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(3)}>Vergi Beyannamesi Nasıl Hazırlanır?</button>
                            </li>
                            <li className={currentParagraph === 4 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(4)}>Vergi İndirimleri ve İstisnalar</button>
                            </li>
                            <li className={currentParagraph === 5 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(5)}>Vergi Beyanı ve İndirimleri Uygulama</button>
                            </li>
                            <li className={currentParagraph === 6 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(6)}>Vergi Türleri ve Avantajları</button>
                            </li>
                            <li className={currentParagraph === 7 ? 'text-[#FFB22C]' : ''}>
                                <button className="transform transition duration-500 hover:scale-105 hover:text-[#e28109]" style={{ transition: 'background-color 0.5s ease' }} onClick={() => handleSetParagraph(7)}>Vergi Türleri ve Avantajları 2</button>
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
                        Gelir ve Vergi Yönetimi
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