import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import { useState } from "react";

//MARK: FinansalOkuryazarliginTemelleri
function FinansalOkuryazarliginTemelleri(){

    
    //MARK: Paragraf Bölümü
    const allParagraphs = [
        "Ekonomide iki farklı aktör vardır. Fon arz edenler ve fon talep edenler. Fon arz edenler, ellerinde ihtiyaçlarından fazla fon bulunan kişiler iken, fon talep edenler ihtiyaç duydukları kadar fona sahip olmayanlardır. Bu kişiler arasında borç ya da ortaklık ilişkisinin doğması kaçınılmazdır. Gelin borç ilişkisine göz atalım. Borç isteyenlerin, bu borcu verebilecek kişileri bulması pek kolay değildir, bulsa bile şartlarda anlaşamayabilirler. Örneğin, yatırım yapmak isteyen bir kişi yatırımından ancak üç yıl sonra gelir elde etmeye başlayabilecek ve ancak üç yıl sonrasında geri ödeme yapabilecektir, ancak fon fazlası olan kişiler en fazla bir yıllığına borç vermek istiyor olabilir.",
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
                    <h1>Finans</h1>
                </div>
                <div className="col-span-3 grid grid-cols-10  grid-rows-10 p-4 m-4 bg-white h-[90vh]">
                <p className="break-words font-bold	 text-justify	 rounded-md font-sans text-[28px] col-span-8 row-span-1 col-start-2 border-4 p-3  row-start-1">
                    Finansal Okuryazarlığın Temelleri</p>
                    <p className="break-words text-justify	 rounded-md font-sans text-[28px] col-span-8 row-span-8 col-start-2 border-4 p-3  row-start-2">
                    {paragraphs}</p>
                    
                    <a onClick={changeParagraph} className="text-white row-start-10 row-end-10 row-span-1 
                    col-start-9 col-span-2 text-center bg-[#161A1D] p-3 rounded-lg text-xl mt-2 ml-12 mb-2">İleri</a>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
  
}

export default FinansalOkuryazarliginTemelleri;