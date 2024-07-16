/* eslint-disable react/no-unescaped-entities */
import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Footer from './Footer.jsx';
import Kurt from "../assets/imageKurt.png";
function About() {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div className="h-[90vh] flex flex-col items-center justify-center bg-[#0B090A] p-8">
                <div className="items-center justify-center grid grid-cols-4 gap-x-4 gap-y-2">
                <img src={Kurt} alt="" className="transform scale-50 -ml-20  col-span-2" />

                <div className="p-8 rounded-lg -ml-44 mr-48 col-span-2 bg-[#161A1D] text-white h-fit">
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
            <Footer></Footer>
        </div>
        
    );
}

export default About;