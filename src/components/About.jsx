/* eslint-disable react/no-unescaped-entities */
import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Footer from './Footer.jsx';
import Kurt from "../assets/imageKurt.png";

function About() {
    return (
        <div className="about-container">
            <NavbarComponent />
            <div className="content-container">
                <img src={Kurt} alt="Kurt" className="image" />
                <div className="image-and-text-container">

                    <div className="text-container">
                        <h2 className="title">Hakkımızda</h2>
                        <p className="paragraph">
                            Merhaba! Biz Wolf of BİST ekibi olarak buradayız ve finansal dünyayı keşfetmek isteyen herkes için bir kapı aralıyoruz. Amacımız, sıkıcı finans terimlerini unutturup, Duolingo ve Coursera'nın keyifli öğrenme deneyimini finansal okuryazarlıkla birleştirmek.
                        </p>
                        <p className="paragraph">
                            Bizimle birlikte, finansal haberleri okuyup anlamayı, yatırım planlarını kendin yapmayı öğreneceksiniz. Çünkü inanıyoruz ki, herkes kendi mali geleceğini yönetebilmeli ve finansal kararlarını bilinçli bir şekilde alabilmeli.
                        </p>
                        <p className="paragraph">
                            Wolf of BİST ekibi olarak, sizlere sadece bilgi sunmakla kalmıyoruz; birlikte öğreniyor, anlamlandırıyor ve günlük hayatınıza uygulamanızı sağlıyoruz. Burada, finansal dünyanın kapılarını açarken, samimi bir öğrenme ortamı sunuyoruz.
                        </p>
                        <p className="paragraph">
                            Bizimle birlikte finansal yolculuğunuza çıkmak isterseniz, sizi aramızda görmekten mutluluk duyarız!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;