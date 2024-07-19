import './Login.css';
import Navbar from "./Navbar";
import React, { useState } from 'react';

async function registerUser(name, email, password){
  try{
    const response = await fetch('https://financialtrainerfinal120240716125722.azurewebsites.net/api/Login/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if(!response.ok){
      throw new Error('Signup failed');
    }
    const data = await response.json();
    setApiResponse(data);
    console.log(data);
  } catch (error){
    console.error(error);
  }
}

async function loginUser(email, password){
  try{
    const response = await fetch('https://financialtrainerfinal120240716125722.azurewebsites.net/api/Login/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if(!response.ok){
      throw new Error('Login failed');
    }
    const data = await response.json();
    setApiResponse(data);
    console.log(data);
  } catch (error){
    console.error(error);
  }

}


function Login() {
  const [apiResponse, setApiResponse] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
      e.preventDefault();
      const newName = e.target.ad.value+ " " + e.target.soyad.value;;
      const newEmail = e.target.email.value;
      const newPassword = e.target.passw.value;
        
      setName(newName);
      setEmail(newEmail);
      setPassword(newPassword);

      //send post request to the server
      registerUser(name, email, password);
  
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const newEmail = e.target.email.value;
    const newPassword = e.target.passw.value;
      
    setEmail(newEmail);
    setPassword(newPassword);

    //send post request to the server
    loginUser(email, password);

}

//              

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B090A]">
        <div id="animatedpart" className="loginpage">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={handleRegister}>
              <label id="girislabel" htmlFor="chk" aria-hidden="true">Kayıt Ol</label> 
              <input id="girisinput" type="text" name="ad" placeholder="Ad" required />
              <input id="girisinput" type="text" name="soyad" placeholder="Soyad" required />
              <input id="girisinput" type="email" name="email" placeholder="Email" required />
              <input id="girisinput" type="password" name="passw" placeholder="Şifre" required />
              <button  id="girisbutton" >Kayıt Ol</button>
            </form>
          </div>


          <div className="login">
            <form onSubmit={handleLogin}>
              <label id="girislabel" htmlFor="chk" aria-hidden="true">Giriş Yap</label>

              <input id="girisinput" type="email" name="email" placeholder="Email" required />
              <input id="girisinput" type="password" name="passw" placeholder="Şifre" required />

              <button id="girisbutton">Giriş Yap</button>

              <label id="pass-forgot" htmlFor="chk-pass" aria-hidden="true">Şifremi Unuttum</label>
              
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;