//Routes burada tanımlanır ve sayfa componentlerı burada çağrılır.

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Test from './components/Test';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFoundPage from './components/NotFound';
import About from './components/About';
import Contact from './components/ContactForm';
import FinansalOkuryazarliginTemelleri from './components/Courses/FinansalOkuryazarliginTemelleri';
import FinansalOkuryazarliginTemelleriQuiz from './components/Courses/FinansalOkuryazarliginTemelleriQuiz';
import Welcome from './components/Welcome';
import GelirveVergiYonetimi from './components/Courses/GelirveVergiYonetimi';
import ChatBot from './components/Chatbot';
import GelirveVergiYonetimiQuiz from './components/Courses/GelirveVergiYonetimiQuiz';
import ApiRequest from './components/ApiRequest';
import Quiz from './components/Quiz';
import Risk from './components/Courses/Risk';
import RiskQuiz from './components/Courses/RiskQuiz';
import CourseTest from './components/Courses/Coursetest';
import BankacilikHizmetleri from './components/Courses/BankacilikHizmetleri';
import ButceveHarcama from './components/Courses/ButceveHarcama';
import KrediKartlari from './components/Courses/KrediKartlari';
import TasarrufveAcilDurumFonlari from './components/Courses/TasarrufveAcilDurumFonlari';
import BorcYonetimi from './components/Courses/BorcYonetimi';
import Kredi from './components/Courses/Kredi';
import KisiselFinansalPlanlama from './components/Courses/KisiselFinansalPlanlama';
import ParaveSermayePiyasasi from './components/Courses/ParaveSermayePiyasasi';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Test' element={<Test />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Chatbot' element={<ChatBot />} />
          <Route path='/FinansalOkuryazarliginTemelleri' element={<FinansalOkuryazarliginTemelleri />} />
          <Route path='/FinansalOkuryazarliginTemelleriQuiz' element={<FinansalOkuryazarliginTemelleriQuiz />} />
          <Route path='/GelirveVergiYonetimi' element={<GelirveVergiYonetimi/>} />
          <Route path='/GelirveVergiYonetimiQuiz' element={<GelirveVergiYonetimiQuiz/>} />
          <Route path='/Risk' element={<Risk/>} />
          <Route path='/RiskQuiz' element={<RiskQuiz/>} />
          <Route path='/BankacilikHizmetleri' element={<BankacilikHizmetleri/>} />
          <Route path='/ButceveHarcama' element={<ButceveHarcama/>} />
          <Route path='/KrediKartlari' element={<KrediKartlari/>} />
          <Route path='/TasarrufveAcilDurumFonlari' element={<TasarrufveAcilDurumFonlari/>} />
          <Route path='/BorcYonetimi' element={<BorcYonetimi/>} />
          <Route path='/Kredi' element={<Kredi/>} />
          <Route path='/KisiselFinansalPlanlama' element={<KisiselFinansalPlanlama/>} />
          <Route path='/ParaveSermayePiyasasi' element={<ParaveSermayePiyasasi/>} />
          <Route path='/Api' element={<ApiRequest/>} />
          <Route path='/Quiz' element={<Quiz/>} />
          <Route path='/CourseTest' element={<CourseTest/>} />

        </Routes>
      </div>
    </>

  );
}

export default App;