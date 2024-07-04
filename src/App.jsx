//Routes burada tanımlanır ve sayfa componentlerı burada çağrılır.

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Test from './components/Test';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Test' element={<Test />} />
        </Routes>
      </div>
    </>

  );
}

export default App;