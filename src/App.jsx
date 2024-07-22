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
import FinansalOkuryazarliginTemelleri from './components/FinansalOkuryazarliginTemelleri';
import Welcome from './components/Welcome';
import GelirveVergiYonetimi from './components/GelirveVergiYonetimi';
import ChatBot from './components/Chatbot';
import GelirveVergiYonetimiQuiz from './components/GelirveVergiYonetimiQuiz';
import ApiRequest from './components/ApiRequest';
import Quiz from './components/Quiz';

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
          <Route path='/GelirveVergiYonetimi' element={<GelirveVergiYonetimi/>} />
          <Route path='/GelirveVergiYonetimiQuiz' element={<GelirveVergiYonetimiQuiz/>} />
          <Route path='/Api' element={<ApiRequest/>} />
          <Route path='/Quiz' element={<Quiz/>} />

        </Routes>
      </div>
    </>

  );
}

export default App;