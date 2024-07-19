import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';

function Signup() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setName(e.target.firstName.value);
    setSurname(e.target.lastName.value);
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    console.log(name, surname, email, password);
  }


  return (
    <div>
      <Navbar></Navbar>
<div className="min-h-screen flex flex-col items-center justify-center bg-[#0B090A]">
      <div className="bg-[#161A1D] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-[#D3D3D3] text-2xl mb-6">Kayıt Ol</h2>
        <form onSubmit={handleRegister}>
        <div className="mb-2 flex justify-center space-x-4">
            <div>
              <label className="block text-[#D3D3D3] mb-2" htmlFor="firstName">Ad</label>
              <input type="text" id="firstName" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
            </div>
            <div>
              <label className="block text-[#D3D3D3] mb-2" htmlFor="lastName">Soyad</label>
              <input type="text" id="lastName" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-[#D3D3D3] mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
          </div>
          <div className="mb-6">
            <label className="block text-[#D3D3D3] mb-2" htmlFor="password">Şifre</label>
            <input type="password" id="password" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
          </div>
          <button type="submit" className="w-full bg-[#D3D3D3] text-[#0B090A] p-2 rounded">Kayıt Ol</button>
        </form>
      </div>
      <h3 className="text-white text-xl mt-10">Zaten Bir Hesabınız Mı Var?</h3>
      <a href="login" className="text-white bg-[#161A1D] p-3 rounded-lg text-xl mt-2">Giriş Yapın</a>

    </div>
    </div>
    
  );
}

export default Signup;