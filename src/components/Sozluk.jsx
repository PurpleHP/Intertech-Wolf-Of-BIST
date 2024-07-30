import React, { useEffect } from 'react';
import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Footer from './Footer.jsx';
import "./Sozluk.css";

function Sozluk() {
    useEffect(() => {
        const pages = document.getElementsByClassName('page');
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            if (i % 2 === 0) {
                page.style.zIndex = (pages.length - i);
            }
        }

        const handlePageClick = function () {
            if (this.pageNum % 2 === 0) {
                this.classList.remove('flipped');
                if (this.previousElementSibling) {
                    this.previousElementSibling.classList.remove('flipped');
                }
            } else {
                this.classList.add('flipped');
                if (this.nextElementSibling) {
                    this.nextElementSibling.classList.add('flipped');
                }
            }
        };

        for (let i = 0; i < pages.length; i++) {
            pages[i].pageNum = i + 1;
            pages[i].addEventListener('click', handlePageClick);
        }

        // Cleanup event listeners
        return () => {
            for (let i = 0; i < pages.length; i++) {
                pages[i].removeEventListener('click', handlePageClick);
            }
        };
    }, []);

    const pageContents = [
        ["<p class='patates'><b>Finans</b>: <em>Paranın yönetimi ve yatırımı ile ilgili işlemler ve kararlar.</em></p>", "<p class='patates'><b>Fon</b>: <em>Belirli bir amaç için biriktirilen veya tahsis edilen para.</em></p>"],
        ["<p class='patates'><b>Sermaye</b>: <em>Bir iş veya yatırım için kullanılan finansal kaynaklar.</em></p>", "<p class='patates'><b>Bütçe</b>: <em>Gelir ve giderlerin planlanması ve izlenmesi süreci.</em></p>"],
        ["<p class='patates'><b>Gelir</b>: <em>Bir birey veya işletmenin kazandığı para.</em></p>", "<p class='patates'><b>Gider</b>: <em>Harcamalar ve maliyetler.</em></p>"],
        ["<p class='patates'><b>Tasarruf</b>: <em>Harcanmayan ve biriktirilen para.</em></p>", "<p class='patates'><b>Yatırım</b>: <em>Gelecekteki getiri beklentisiyle yapılan para veya kaynak tahsisi.</em></p>"],
        ["<p class='patates'><b>Faiz</b>: <em>Borç alınan paranın kullanımı için ödenen ücret.</em></p>", "<p class='patates'><b>Kredi</b>: <em>Geri ödeme taahhüdü ile alınan borç para.</em></p>"],
        ["<p class='patates'><b>Borç</b>: <em>Geri ödenmesi gereken para veya diğer yükümlülükler.</em></p>", "<p class='patates'><b>Likidite</b>: <em>Varlıkların hızla ve kolayca nakde çevrilebilme özelliği.</em></p>"],
        ["<p class='patates'><b>Varlık</b>: <em>Değer taşıyan ve sahip olunan şeyler, örneğin ev, araba, hisse senetleri.</em></p>", "<p class='patates'><b>Borç Yükü</b>: <em>Bireyin veya işletmenin toplam borç miktarı.</em></p>"],
        ["<p class='patates'><b>Nakit Akışı</b>: <em>Gelir ve giderlerin zaman içindeki hareketi.</em></p>", "<p class='patates'><b>Enflasyon</b>: <em>Genel fiyat seviyesinin zamanla yükselmesi.</em></p>"],
        ["<p class='patates'><b>Deflasyon</b>: <em>Genel fiyat seviyesinin zamanla düşmesi.</em></p>", "<p class='patates'><b>Borsa</b>: <em>Hisse senetleri ve diğer menkul kıymetlerin alınıp satıldığı piyasa.</em></p>"],
        ["<p class='patates'><b>Tahvil</b>: <em> İhraç eden kurumun yatırımcılara belirli bir vadede faiz ödemeyi ve anapara geri ödemeyi taahhüt ettiği bir borçlanma aracı.</em></p>", "<p class='patates'><b>Hisse Senedi</b>: <em>Bir şirketin mülkiyet payını temsil eden menkul kıymet.</em></p>"],
        ["<p class='patates'><b>Emtia</b>: <em>Altın, petrol gibi fiziksel varlıklar.</em></p>", "<p class='patates'><b>Döviz</b>: <em>Farklı ülkelerin para birimleri.</em></p>"],
        ["<p class='patates'><b>Portföy</b>: <em>Bir yatırımcının sahip olduğu tüm yatırım araçları ve varlıklar.</em></p>", "<p class='patates'><b>Çeşitlendirme</b>: <em>Yatırımları farklı varlıklara dağıtarak riskin azaltılması.</em></p>"],
        ["<p class='patates'><b>Riski Yönetimi</b>: <em>Finansal risklerin tanımlanması, değerlendirilmesi ve kontrol edilmesi süreci.</em></p>", "<p class='patates'><b>Vergi</b>: <em>Devlet tarafından gelir, mal veya hizmetler üzerinden alınan zorunlu ödeme.</em></p>"],
        ["<p class='patates'><b>Menkul Kıymet</b>: <em>Finansal değeri olan belgeler, örneğin hisse senetleri ve tahviller.</em></p>", "<p class='patates'><b>Prim</b>: <em>Sigorta poliçesi için ödenen düzenli ödeme.</em></p>"],
        ["<p class='patates'><b>Marj</b>: <em>Borç para kullanarak yapılan yatırımda, yatırımcının yatırdığı öz kaynak miktarı.</em></p>"]
    ];

    return (
        <div className="about-container">
            <NavbarComponent />
            <div className="content-container">
                <div className="book">
                    <div id="pages" className="pages">
                        {pageContents.map((content, index) => (
                            <div className="page" key={index}>
                                <div dangerouslySetInnerHTML={{ __html: content[0] }} />
                                <div dangerouslySetInnerHTML={{ __html: content[1] }} />
                                <span className="pageNumber">{index + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Sozluk;
