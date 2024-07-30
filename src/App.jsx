//Routes burada tanımlanır ve sayfa componentlerı burada çağrılır.

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Test from './components/Test';
import Login from './components/Login';
import NotFoundPage from './components/NotFound';
import About from './components/About';
import Contact from './components/ContactForm';
import FinansalOkuryazarliginTemelleri from './components/Courses/FinansalOkuryazarliginTemelleri';
import FinansalOkuryazarliginTemelleriQuiz from './components/Courses/FinansalOkuryazarliginTemelleriQuiz';
import Welcome from './components/Welcome';
import GelirveVergiYonetimi from './components/Courses/GelirveVergiYonetimi';
import ChatBot from './components/Chatbot';
import Sozluk from './components/Sozluk';
import GelirveVergiYonetimiQuiz from './components/Courses/GelirveVergiYonetimiQuiz';
import ApiRequest from './components/ApiRequest';
import Quiz from './components/Quiz';
import Risk from './components/Courses/Risk';
import RiskQuiz from './components/Courses/RiskQuiz';
import CourseTest from './components/Courses/Coursetest';
import BankacilikHizmetleri from './components/Courses/BankacilikHizmetleri';
import BankacilikHizmetleriQuiz from './components/Courses/BankacilikHizmetleriQuiz';
import ButceveHarcama from './components/Courses/ButceveHarcama';
import ButceveHarcamaQuiz from './components/Courses/ButceveHarcamaQuiz';
import KrediKartlari from './components/Courses/KrediKartlari';
import KrediKartlariQuiz from './components/Courses/KrediKartlariQuiz';
import TasarrufveAcilDurumFonlari from './components/Courses/TasarrufveAcilDurumFonlari';
import TasarrufveAcilDurumFonlariQuiz from './components/Courses/TasarrufveAcilDurumFonlariQuiz';
import BorcYonetimi from './components/Courses/BorcYonetimi';
import BorcYonetimiQuiz from './components/Courses/BorcYonetimiQuiz';
import Kredi from './components/Courses/Kredi';
import KrediQuiz from './components/Courses/KrediQuiz';
import KisiselFinansalPlanlama from './components/Courses/KisiselFinansalPlanlama';
import KisiselFinansalPlanlamaQuiz from './components/Courses/KisiselFinansalPlanlamaQuiz';
import ParaveSermayePiyasasi from './components/Courses/ParaveSermayePiyasasi';
import ParaveSermayePiyasasiQuiz from './components/Courses/ParaveSermayePiyasasiQuiz';
import KisiselYatirimStratejisi from './components/Courses/KisiselYatirimStratejisi';
import KisiselYatirimStratejisiQuiz from './components/Courses/KisiselYatirimStratejisiQuiz';
import Borsa from './components/Courses/Borsa';
import Kripto from './components/Courses/Kripto';
import Bitki from './components/bitki';
import ProgressBar from './components/ProgressBar';


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Test' element={<Test />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Chatbot' element={<ChatBot />} />
          <Route path='/Sozluk' element={<Sozluk />} />
          <Route path='/FinansalOkuryazarliginTemelleri' element={<FinansalOkuryazarliginTemelleri />} />
          <Route path='/FinansalOkuryazarliginTemelleriQuiz' element={<FinansalOkuryazarliginTemelleriQuiz />} />
          <Route path='/GelirveVergiYonetimi' element={<GelirveVergiYonetimi />} />
          <Route path='/GelirveVergiYonetimiQuiz' element={<GelirveVergiYonetimiQuiz />} />
          <Route path='/Risk' element={<Risk />} />
          <Route path='/RiskQuiz' element={<RiskQuiz />} />
          <Route path='/BankacilikHizmetleri' element={<BankacilikHizmetleri />} />
          <Route path='/BankacilikHizmetleriQuiz' element={<BankacilikHizmetleriQuiz />} />
          <Route path='/ButceveHarcama' element={<ButceveHarcama />} />
          <Route path='/ButceveHarcamaQuiz' element={<ButceveHarcamaQuiz />} />
          <Route path='/KrediKartlari' element={<KrediKartlari />} />
          <Route path='/KrediKartlariQuiz' element={<KrediKartlariQuiz />} />
          <Route path='/TasarrufveAcilDurumFonlari' element={<TasarrufveAcilDurumFonlari />} />
          <Route path='/TasarrufveAcilDurumFonlariQuiz' element={<TasarrufveAcilDurumFonlariQuiz />} />
          <Route path='/BorcYonetimi' element={<BorcYonetimi />} />
          <Route path='/BorcYonetimiQuiz' element={<BorcYonetimiQuiz />} />
          <Route path='/Kredi' element={<Kredi />} />
          <Route path='/KrediQuiz' element={<KrediQuiz />} />
          <Route path='/KisiselFinansalPlanlama' element={<KisiselFinansalPlanlama />} />
          <Route path='/KisiselFinansalPlanlamaQuiz' element={<KisiselFinansalPlanlamaQuiz />} />
          <Route path='/ParaveSermayePiyasasi' element={<ParaveSermayePiyasasi />} />
          <Route path='/ParaveSermayePiyasasiQuiz' element={<ParaveSermayePiyasasiQuiz />} />
          <Route path='/KisiselYatirimStratejisi' element={<KisiselYatirimStratejisi />} />
          <Route path='/KisiselYatirimStratejisiQuiz' element={<KisiselYatirimStratejisiQuiz />} />
          <Route path='/Borsa' element={<Borsa />} />
          <Route path='/Kripto' element={<Kripto />} />
          <Route path='/Api' element={<ApiRequest />} />
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/CourseTest' element={<CourseTest />} />
          <Route path='/ProgressBar' element={<ProgressBar />} />
          <Route path='/Bitki' element={<Bitki />} />
        </Routes>
      </div>
    </>

  );
}

export default App;