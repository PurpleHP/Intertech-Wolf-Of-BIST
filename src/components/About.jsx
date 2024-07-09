import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

function About() {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B090A] p-8">
            <div className="bg-[#161A1D] p-8 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/2 text-white">
                <h2 className="text-2xl mb-6">Hakkımızda</h2>
                <p className="mb-4">
                    Merhaba! Biz Wolf of BİST ekibi olarak buradayız ve finansal dünyayı keşfetmek isteyen herkes için bir kapı aralıyoruz. Amacımız, sıkıcı finans terimlerini unutturup, Duolingo ve Coursera'nın keyifli öğrenme deneyimini finansal okuryazarlıkla birleştirmek.
                </p>
                <p className="mb-4">
                    Bizimle birlikte, finansal haberleri okuyup anlamayı, yatırım planlarını kendin yapmayı öğreneceksiniz. Çünkü inanıyoruz ki, herkes kendi mali geleceğini yönetebilmeli ve finansal kararlarını bilinçli bir şekilde alabilmeli.
                </p>
                <p className="mb-4">
                    Wolf of BİST ekibi olarak, sizlere sadece bilgi sunmakla kalmıyoruz; birlikte öğreniyor, anlamlandırıyor ve günlük hayatınıza uygulamanızı sağlıyoruz. Burada, finansal dünyanın kapılarını açarken, samimi bir öğrenme ortamı sunuyoruz.
                </p>
                <p>
                    Bizimle birlikte finansal yolculuğunuza çıkmak isterseniz, sizi aramızda görmekten mutluluk duyarız!
                </p>
            </div>
        </div>
        </div>
        
    );
}

export default About;