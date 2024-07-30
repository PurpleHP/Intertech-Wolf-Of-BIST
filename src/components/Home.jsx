import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import CircularProgressBar from './ProgressBar';
import { useState, useEffect } from 'react';
import loadingGif from '../assets/loading.gif';

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
  const [renderSite, setRenderSite] = useState(false);
  const [notFinishedCourses, setNotFinishedCourses] = useState([]);
  const [formattedEducationIds, setFormattedEducationIds] = useState([
    { id: 1, isFinishedList: false },
    { id: 7, isFinishedList: false },
    { id: 4, isFinishedList: false },
    { id: 9, isFinishedList: false },
    { id: 10, isFinishedList: false },
    { id: 11, isFinishedList: false },
    { id: 12, isFinishedList: false },
    { id: 13, isFinishedList: false },
    { id: 14, isFinishedList: false },
    { id: 15, isFinishedList: false },
    { id: 16, isFinishedList: false },
    { id: 17, isFinishedList: false },
    { id: 18, isFinishedList: false },
    { id: 19, isFinishedList: false }
  ]);

  const images = {
    1: okuryazarlik,
    7: bankacilikHizmetleri,
    4: butceharcama,
    9: kredikartlari,
    10: tasarruf,
    11: DebtImage,
    12: kredi,
    13: kisiselFinansalPlanlama,
    14: VergiGelir,
    15: paraSermayePiyasasi,
    16: yatirimstrateji,
    17: borsa,
    18: kripto,
    19: risk
  };

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
            
            console.log("Data:\n", data);

            const updatedFormattedEducationIds = formattedEducationIds.map(edu => {
              const course = data.find(d => parseInt(d.eduId) === edu.id);
              return course ? { ...edu, isFinishedList: course.status === "DONE" } : edu;
            });

            const notFinishedCourses = updatedFormattedEducationIds.filter(edu => !edu.isFinishedList).slice(0, 2);

            setFormattedEducationIds(updatedFormattedEducationIds);
            setNotFinishedCourses(notFinishedCourses);
            console.log("Formatted:\n", updatedFormattedEducationIds);
            console.log("Not Finished Courses:\n", notFinishedCourses);
            setRenderSite(true);
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
      {renderSite ? 
      <div>
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
              {notFinishedCourses.map(course => (
                <Card 
                  key={course.id} 
                  cardName={`Kurs ${course.id}`} 
                  to={`/course/${course.id}`} 
                  imgSrc={images[course.id]} 
                  difficulty="medium" 
                  EducationId={course.id}
                />
              ))}
            </div>
          </>
        ) : null}
      </Menu>
      <Menu>
        <h1 className='text-2xl'>Tüm Kurslar</h1>
        <div className='flex'>
          <Card cardName="Finansal Okuryazarlık" to="/FinansalOkuryazarliginTemelleri" imgSrc={okuryazarlik} difficulty="easy" EducationId="1" 
            isFinished={formattedEducationIds.find(item => item.id === 1)?.isFinishedList}/>
          <Card cardName="Bankacılık Hizmetleri" to="/BankacilikHizmetleri" imgSrc={bankacilikHizmetleri} difficulty="easy" EducationId="7" 
          isFinished={formattedEducationIds.find(item => item.id === 7)?.isFinishedList} />
        </div>
        <div className='flex'>
          <Card cardName="Bütçe ve Harcama" to="/ButceveHarcama" imgSrc={butceharcama} difficulty="easy" EducationId="4" 
          isFinished={formattedEducationIds.find(item => item.id === 4)?.isFinishedList}/>
          <Card cardName="Kredi Kartları" to="/KrediKartlari" imgSrc={kredikartlari} difficulty="easy" EducationId="9"
          isFinished={formattedEducationIds.find(item => item.id === 9)?.isFinishedList}/>
        </div>
        <div className='flex'>
          <Card cardName="Tasarruf ve Acil Durum Fonları" to="/TasarrufveAcilDurumFonlari" imgSrc={tasarruf} difficulty="easy" EducationId="10"
           isFinished={formattedEducationIds.find(item => item.id === 10)?.isFinishedList}/>
          <Card cardName="Borç Yönetimi" to="/BorcYonetimi" imgSrc={DebtImage} difficulty="medium" EducationId="11" 
          isFinished={formattedEducationIds.find(item => item.id === 11)?.isFinishedList}/>
        </div>
        <div className='flex'>
          <Card cardName="Kredi" to="/Kredi" imgSrc={kredi} difficulty="medium" EducationId="12" 
          isFinished={formattedEducationIds.find(item => item.id === 12)?.isFinishedList}/>
          <Card cardName="Kişisel Finansal Planlama" to="/KisiselFinansalPlanlama" imgSrc={kisiselFinansalPlanlama} difficulty="medium" EducationId="13" 
          isFinished={formattedEducationIds.find(item => item.id === 13)?.isFinishedList}/>
        </div>
        <div className='flex'>
          <Card cardName="Gelir ve Vergi Yönetimi" to="/GelirveVergiYonetimi" imgSrc={VergiGelir} difficulty="medium" EducationId="14" 
          isFinished={formattedEducationIds.find(item => item.id === 14)?.isFinishedList}/>
          <Card cardName="Para ve Sermaye Piyasası" to="/ParaveSermayePiyasasi" imgSrc={paraSermayePiyasasi} difficulty="medium" EducationId="15" 
          isFinished={formattedEducationIds.find(item => item.id === 15)?.isFinishedList}/>
        </div>
        <div className='flex'>
          <Card cardName="Kişisel Yatırım Stratejisi" to="/KisiselYatirimStratejisi" imgSrc={yatirimstrateji} difficulty="hard" EducationId="16" 
          isFinished={formattedEducationIds.find(item => item.id === 16)?.isFinishedList}/>
          <Card cardName="Borsa" to="/Borsa" imgSrc={borsa} difficulty="hard" EducationId="17" 
          isFinished={formattedEducationIds.find(item => item.id === 17)?.isFinishedList}/>
        </div>
        <div className='flex'>
          <Card cardName="Kripto" to="/Kripto" imgSrc={kripto} difficulty="hard" EducationId="18" 
          isFinished={formattedEducationIds.find(item => item.id === 18)?.isFinishedList} />
          <Card cardName="Risk" to="/Risk" imgSrc={risk} difficulty="hard" EducationId="19" 
          isFinished={formattedEducationIds.find(item => item.id === 19)?.isFinishedList}/>
        </div>
      </Menu>
      </div>
        : 
      <div className="bg-black flex items-center justify-center w-screen h-screen">
          <img width={100} src={loadingGif} alt="Loading animation" />
      </div>}
      
      <div id='contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
