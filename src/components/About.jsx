import './Home.css';
import './About.css';
import Footer from './Footer.jsx';
import Sea from "../assets/sea-wp.png";
import Ship from "../assets/ship-wp.png";
import Kurt from "../assets/imageKurt.png";
import { useEffect, useState } from 'react';

function About() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about-container">
            <img 
                src={Sea} 
                alt="Sea" 
                className="sea-image" 
                style={{ 
                    position: scrollY > 3000 ? 'absolute' : 'fixed', 
                    top: scrollY > 3000 ? 'auto' : '0',
                    transform: scrollY > 3000 ? `translateY(${scrollY - 3000}px) scale(${1 + (scrollY - 3000) * 0.00005})` : `scale(${1 + scrollY * 0.00005})`,
                    
                }} 
            />
            <img
                src={Ship}
                alt="Ship"
                className="ship-image"
                style={{ 
                    transform: `scale(${1 + scrollY * 0.012})`,
                    display: scrollY > 2500 ? 'none' : 'block'
                }}
            />
            <div className="about-text" style={{ display: scrollY > 2500 ? 'flex' : 'none' }}>
                <img src={Kurt} alt="Kurt" className="kurt-image" />
                <div className="about-content">
                    <h1 className='about-baslik'>Hakkımızda</h1>
                    <p className='paragraph'>Merhaba! Biz Wolf of BİST ekibi olarak buradayız ve finansal dünyayı keşfetmek isteyen herkes için bir kapı aralıyoruz. Amacımız, sıkıcı finans terimlerini unutturup, Duolingo ve Coursera'nın keyifli öğrenme deneyimini finansal okuryazarlıkla birleştirmek.</p>
                    <p className='paragraph'>Bizimle birlikte, finansal haberleri okuyup anlamayı, yatırım planlarını kendin yapmayı öğreneceksiniz. Çünkü inanıyoruz ki, herkes kendi mali geleceğini yönetebilmeli ve finansal kararlarını bilinçli bir şekilde alabilmeli.</p>
                    <p className='paragraph'>Wolf of BİST ekibi olarak, sizlere sadece bilgi sunmakla kalmıyoruz; birlikte öğreniyor, anlamlandırıyor ve günlük hayatınıza uygulamanızı sağlıyoruz. Burada, finansal dünyanın kapılarını açarken, samimi bir öğrenme ortamı sunuyoruz.</p>
                    <p className='paragraph'>Bizimle birlikte finansal yolculuğunuza çıkmak isterseniz, sizi aramızda görmekten mutluluk duyarız!</p>
                </div>
            </div>


            <button
                    onClick={() => window.location.href = '/home'}
                    style={{height: '100px'}}
                    className="about-home text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 hover:scale-105 shadow-lg hover:bg-[#e28109]">
                            Ana Sayfaya Dön
            </button>

            <Footer className="footer-about"/>
        </div>

       
    );
}

export default About;
