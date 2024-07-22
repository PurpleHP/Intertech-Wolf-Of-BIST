import './Login.css';
import Navbar from "./Navbar";
import React, { useState } from 'react';


function Login() {
  const [apiResponse, setApiResponse] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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
  


  const handleRegister = async (e) => {
    e.preventDefault();
    const newName = e.target.ad.value + " " + e.target.soyad.value;
    const newEmail = e.target.email.value;
    const newPassword = e.target.passw.value;

    // Directly use newName, newEmail, and newPassword here
    await registerUser(newName, newEmail, newPassword);
}

  const handleLogin = async (e) => {
    e.preventDefault();
    const newEmail = e.target.email.value;
    const newPassword = e.target.passw.value;
    
    //send post request to the server
    await loginUser(newEmail, newPassword);
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
              <label className="girislabel" htmlFor="chk" aria-hidden="true">Kayıt Ol</label> 
              <input className="girisinput" type="text" name="ad" placeholder="Ad" required />
              <input className="girisinput" type="text" name="soyad" placeholder="Soyad" required />
              <input className="girisinput" type="email" name="email" placeholder="Email" required />
              <input className="girisinput" type="password" name="passw" placeholder="Şifre" required />
              <button  className="girisbutton" >Kayıt Ol</button>
            </form>
          </div>


          <div className="login">
            <form onSubmit={handleLogin}>
              <label className="girislabel" htmlFor="chk" aria-hidden="true">Giriş Yap</label>

              <input className="girisinput" type="email" name="email" placeholder="Email" required />
              <input className="girisinput" type="password" name="passw" placeholder="Şifre" required />

              <button className="girisbutton">Giriş Yap</button>

              <label className="pass-forgot" htmlFor="chk-pass" aria-hidden="true">Şifremi Unuttum</label>
              
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;