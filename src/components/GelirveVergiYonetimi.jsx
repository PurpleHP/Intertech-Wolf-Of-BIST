import Footer from "./Footer";
import { useState } from "react";
import TextWithLineBreaks from './TextWithLineBreaks';



function GelirveVergiYonetimi(){
    
  
    
    //MARK: Paragraf Bölümü
    const allParagraphs = [
        "Gelir kaynakları, bireylerin veya ailelerin yaşam giderlerini karşılamak için elde ettikleri finansal kaynaklardır. Gelir kaynakları farklı kategorilere ayrılabilir:\n1.	Aktif Gelir: Bu, bir kişinin aktif olarak çalışarak kazandığı gelirdir. Maaş, ücret, komisyon ve serbest meslek kazançları bu kategoriye girer. Aktif gelir, sürekli çalışmayı gerektirir. \n 2.	Pasif Gelir: Bu, bireyin aktif olarak çalışmadan kazandığı gelirdir. Kiralık mülklerden elde edilen kira gelirleri, telif hakları, patent gelirleri ve yatırım gelirleri pasif gelir kaynaklarına örnektir. Pasif gelir, zaman içinde artabilir ve mali bağımsızlık sağlamada önemli bir rol oynar.\n3.	Portföy Geliri: Bu gelir, yatırım faaliyetlerinden elde edilir. Hisse senetleri, tahviller, yatırım fonları ve diğer finansal araçlardan elde edilen gelirler portföy geliri olarak sınıflandırılır. Portföy geliri, yatırımın getirisini yansıtır ve finansal planlamada önemli bir unsurdur.\n4.	Emeklilik Geliri: Emeklilik planları ve sosyal güvenlik ödemeleri gibi kaynaklardan elde edilen gelirlerdir. Bu gelirler, bireylerin emeklilik döneminde mali güvence sağlamalarına yardımcı olur.",
        "Bir diğer önemli nokta da güven problemidir. Fon fazlası olan kişiler geri ödemenin zamanında ve tam olarak yapılmasını ister ancak bundan pek emin olamayacağı için borç vermek istemeyebilir. Bu durumda, birikim sahibi olmayan bireyler ihtiyaçları ve gelirleri arasındaki zamansal uyuşmazlıklar nedeniyle zorluk yaşayabilir veya yatırımlar için gerekli para bulunamayacağından ekonomik gelişim sağlanamayabilir.",
        "Günümüzde bu gibi problemlerin çözümünde bankalar büyük rol oynamaktadır. Sistem şu şekilde işler; ihtiyacından fazla parası olanlar bu paralarını bankada tutar ve bunun karşılığında bir miktar faiz geliri elde eder. Banka bu paraların bir kısmını Merkez bankasına teminat olarak yatırır, bir kısmını nakit kullanmak isteyen kişiler için kullanıma hazır olarak bekletir. Kalan kısmını da kredi olarak verir. Bu sistemde borç verenler ve borç alanlar birbirleriyle hiçbir şekilde muhatap olmaz, iki tarafın da tek muhatabı bankadır."
    ]

    const [paragraphs, setParagraphs] = useState([allParagraphs[0]]);
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const changeParagraph = () => {
        if(currentParagraph !=  allParagraphs.length-1){
            setParagraphs(allParagraphs[currentParagraph+1]);
            setCurrentParagraph(currentParagraph+1);
        }
        else{
            //Quiz başlat, eğitim bitti
        }
    }


    
    return(
        <div>
            <div className="items-center justify-center grid grid-cols-4 gap-x-4 gap-y-2">
                <div className="col-span-1 p-4 m-4 bg-black h-[90vh]">
                    <h1>Gelir Kaynakları ve Çeşitleri</h1>
                </div>
                <div className="col-span-3 grid grid-cols-10  grid-rows-10 p-4 m-4 bg-white h-[90vh]">
                <p className="break-words font-bold	 text-justify	 rounded-md font-sans text-[28px] col-span-8 row-span-1 col-start-2 border-4 p-3  row-start-1">
                    Gelir ve Vergi Yönetimi</p>
                    <p className="break-words text-justify	 rounded-md font-sans text-[28px] col-span-8 row-span-8 col-start-2 border-4 p-3  row-start-2">
                    {paragraphs}</p>

                    <TextWithLineBreaks  text={paragraphs} />
                    
                    <a onClick={changeParagraph} className="text-white row-start-10 row-end-10 row-span-1 
                    col-start-9 col-span-2 text-center bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2">İleri</a>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}

export default GelirveVergiYonetimi;