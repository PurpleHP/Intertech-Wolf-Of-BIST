//Routes burada tanımlanır ve sayfa componentlerı burada çağrılır.

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Test from './components/Test';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Test' element={<Test />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </div>
    </>

  );
}

export default App;