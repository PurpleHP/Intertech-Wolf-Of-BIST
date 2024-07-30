import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import CircularProgressBar from './ProgressBar';
import { useState, useEffect } from 'react';

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
import kredi from "../assets/orta/kredi.jpg";
import kisiselFinansalPlanlama from "../assets/orta/kisisel-finansal-planlama.jpg";
import paraSermayePiyasasi from "../assets/orta/para-sermaye-piyasasi.png";

//Hard Images
import yatirimstrateji from "../assets/zor/kisisel-yatirim-stratejisi.jpg"; //ok
import borsa from "../assets/zor/borsa.jpg"; //ok
import kripto from "../assets/zor/kripto.jpg";
import risk from "../assets/zor/risk.jpg";
//-------------------------

function App() {
  const [userId, setUserId] = useState(null);
  const [formattedEducationIds, setFormattedEducationIds] = useState([]);

  const educationIds = [1, 7, 4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let formattedEducationIds = educationIds.map(id => ({
    id: id,
    isFinishedList: false
  }));
  let notFinishedEducationIds = [1, 7, 4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
 

  //2 tane storelamak için
  let progress = [];



  useEffect(() => {
    const fetchData = async () => {
        const storedUserId = localStorage.getItem('userId');

        try {
            const raw = JSON.stringify({ "userId": storedUserId });

            const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: raw,
                redirect: "follow"
            };
            console.log(storedUserId);
            const targetUrl = 'https://financialtrainerfinal120240716125722.azurewebsites.net/api/Education/getEducationByUser';
            const response = await fetch(targetUrl, requestOptions);
            const data = await response.json();
            let completedCount = 0;
            let twoCourse = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].status === "DONE") {
                    completedCount++;
                    formattedEducationIds[data[i].eduId].isFinishedList = true;
                    
                }
                else if (twoCourse < 2) {
                  progress.push(data[i]);
                  twoCourse++;
                }
            }
           
        } catch (error) {
            console.error('Error:', error);
        }
    };

      fetchData();
    }, []);

  useEffect(() => {
    const storedUserId = parseInt(localStorage.getItem('userId'));
    setUserId(storedUserId);
  }, []);

  return (
    <div className="App" id='home'>
      <NavbarComponent />
      <Menu>
        {userId && userId !== 0 ? (
          <>
            <div className="progress-header flex flex-col">
              <h1 className='text-2xl mb-15'>İlerlemeniz</h1>
              <div className="progress-bar-wrapper mt-5">
                <CircularProgressBar />
              </div>
            </div>
            <div className='progress-cards'>
              <Card cardName="Finansal Okuryazarlık" to="/FinansalOkuryazarliginTemelleri" imgSrc={okuryazarlik} difficulty="easy" EducationId="1" />
              <Card cardName="Gelir ve Vergi Yönetimi" to="/GelirveVergiYonetimi" imgSrc={VergiGelir} difficulty="medium" EducationId="14"/>
            </div>
          </>
        ) : null}
      </Menu>
      <Menu>
        <h1 className='text-2xl'>Tüm Kurslar</h1>
        <div className='flex'>
          <Card cardName="Finansal Okuryazarlık" to="/FinansalOkuryazarliginTemelleri" imgSrc={okuryazarlik} difficulty="easy" EducationId="1" 
            isFinished={formattedEducationIds.find(item => item.id === 1)?.isFinishedList}/>
          <Card cardName="Bankacılık Hizmetleri" to="/BankacilikHizmetleri" imgSrc={bankacilikHizmetleri} difficulty="easy" EducationId="7" isFinished={formattedEducationIds.find(item => item.id === 1)?.isFinishedList} />
        </div>
        <div className='flex'>
          <Card cardName="Bütçe ve Harcama" to="/ButceveHarcama" imgSrc={butceharcama} difficulty="easy" EducationId="4" isFinished={true}/>
          <Card cardName="Kredi Kartları" to="/KrediKartlari" imgSrc={kredikartlari} difficulty="easy" EducationId="9" isFinished={true}/>
        </div>
        <div className='flex'>
          <Card cardName="Tasarruf ve Acil Durum Fonları" to="/TasarrufveAcilDurumFonlari" imgSrc={tasarruf} difficulty="easy" EducationId="10"/>
          <Card cardName="Borç Yönetimi" to="/BorcYonetimi" imgSrc={DebtImage} difficulty="medium" EducationId="11" />
        </div>
        <div className='flex'>
          <Card cardName="Kredi" to="/Kredi" imgSrc={kredi} difficulty="medium" EducationId="12"/>
          <Card cardName="Kişisel Finansal Planlama" to="/KisiselFinansalPlanlama" imgSrc={kisiselFinansalPlanlama} difficulty="medium" EducationId="13"/>
        </div>
        <div className='flex'>
          <Card cardName="Gelir ve Vergi Yönetimi" to="/GelirveVergiYonetimi" imgSrc={VergiGelir} difficulty="medium" EducationId="14" />
          <Card cardName="Para ve Sermaye Piyasası" to="/ParaveSermayePiyasasi" imgSrc={paraSermayePiyasasi} difficulty="medium" EducationId="15" />
        </div>
        <div className='flex'>
          <Card cardName="Kişisel Yatırım Stratejisi" to="/KisiselYatirimStratejisi" imgSrc={yatirimstrateji} difficulty="hard" EducationId="16" />
          <Card cardName="Borsa" to="/Borsa" imgSrc={borsa} difficulty="hard" EducationId="17" />
        </div>
        <div className='flex'>
          <Card cardName="Kripto" to="/Kripto" imgSrc={kripto} difficulty="hard" EducationId="18" />
          <Card cardName="Risk" to="/Risk" imgSrc={risk} difficulty="hard" EducationId="19" />
        </div>
      </Menu>
      <div id='contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
