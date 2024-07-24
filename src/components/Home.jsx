import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';


//--------------------------
//MARK: Images

//Easy Images
import okuryazarlik from "../assets/kolay/finansal-okuryazarlik.jpg";
import bankacilikHizmetleri from "../assets/kolay/bankacilik-hizmetleri.jpg";
import butceharcama from "../assets/kolay/butce-harcama.jpg";
import kredikartlari from "../assets/kolay/kredi-kartlari.jpg";
import tasarruf from "../assets/kolay/tasarruf-acil-durum-fonlari.jpg";


//Medium Images
import VergiGelir from "../assets/orta/vergi-gelir.png"; 
import DebtImage from "../assets/orta/borc-yonetimi.png"; 
import kredi from "../assets/orta/kredi.jpg" 
import kisiselFinansalPlanlama from "../assets/orta/kisisel-finansal-planlama.jpg" 
import paraSermayePiyasasi from "../assets/orta/para-sermaye-piyasasi.png" 


//Hard Images
import yatirimstrateji from "../assets/zor/kisisel-yatirim-stratejisi.jpg"; //ok
import borsa from "../assets/zor/borsa.jpg"; //ok
import kripto from "../assets/zor/kripto.jpg";
import risk from "../assets/zor/risk.jpg";


//-------------------------

function App() {
  return (
    <div className="App" id='home'>
      <NavbarComponent></NavbarComponent>
      <Menu>
      <h1 className='text-2xl'>Your Progress</h1>
            <div className='flex'>
                <Card cardName="Finansal Okuryazarlık" to="/FinansalOkuryazarliginTemelleri" imgSrc={okuryazarlik} difficulty="easy">
                </Card>
                <Card cardName="Gelir ve Vergi Yönetimi" to="/GelirveVergiYonetimi" imgSrc={VergiGelir} difficulty="medium" >
                </Card>
              
            </div>
      </Menu>
      <Menu>
        


            <h1 className='text-2xl'>All Courses</h1>
            <div className='flex'>
                <Card cardName="Finansal Okuryazarlık" to="/FinansalOkuryazarliginTemelleri" imgSrc={okuryazarlik} difficulty="easy">
                </Card>
                <Card cardName="Bankacılık Hizmetleri" to="/BankacilikHizmetleri" imgSrc={bankacilikHizmetleri} difficulty="easy">
                    
                </Card>
            </div>
            <div className='flex'>
                <Card cardName="Bütçe ve Harcama" to="/ButceveHarcama" imgSrc={butceharcama} difficulty="easy">
                </Card>
                <Card cardName="Kredi Kartları" to="/KrediKartlari" imgSrc={kredikartlari} difficulty="easy">
                    
                </Card>
            </div>
            <div className='flex'>
                <Card cardName="Tasarruf ve Acil Durum Fonları" to="/TasarrufveAcilDurumFonlari" imgSrc={tasarruf} difficulty="easy">
                </Card>
                <Card cardName="Borç Yönetimi" to="/BorcYonetimi" imgSrc={DebtImage} difficulty="medium">
                </Card>
            </div>

            <div className='flex'>
                
                <Card cardName="Kredi" to="/Kredi" imgSrc={kredi} difficulty="medium">
                    </Card>
                        
                <Card cardName="Kişisel Finansal Planlama" to="/KisiselFinansalPlanlama" imgSrc={kisiselFinansalPlanlama} difficulty="medium">
  
              </Card>
            </div>
            <div className='flex'>
            <Card cardName="Gelir ve Vergi Yönetimi" to="/GelirveVergiYonetimi" imgSrc={VergiGelir} difficulty="medium">
                    </Card>
                    <Card cardName="Para ve Sermaye Piyasası" to="/ParaveSermayePiyasasi" imgSrc={paraSermayePiyasasi} difficulty="medium">
                    
                    </Card>
            </div>
            <div className='flex'>
              <Card cardName="Kişisel Yatırım Stratejisi" to="/KisiselYatirimStratejisi" imgSrc={yatirimstrateji} difficulty="hard">
              </Card>
              <Card cardName="Borsa" imgSrc={borsa} difficulty="hard">
              </Card>
            </div>
            <div className='flex'>
              <Card cardName="Kripto" imgSrc={kripto} difficulty="hard">
              </Card>
              <Card cardName="Risk" to="/Risk" imgSrc={risk} difficulty="hard">
              </Card>
            </div>
      </Menu>
      <div id='contact'>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
