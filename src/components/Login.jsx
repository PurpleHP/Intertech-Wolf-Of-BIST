import './Login.css';
import Navbar from "./Navbar";
import React, { useState } from 'react';


// Assuming the API endpoint for signup is "/api/signup"
async function signupApiCall(name, email, password, setApiResponse, setError) {
  try {
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

    if (!response.ok) {
      throw new Error('Signup failed');
    }

    const data = await response.json();
    setApiResponse(data);
  } catch (error) {
    setError(error.message);
  }
};




// Define the API call function outside the Login component
async function loginApiCall(name, email, password, setApiResponse, setError) {
  try {
    const response = await fetch('https://financialtrainerfinal120240716125722.azurewebsites.net/api/Login/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log(data);
    setApiResponse(data); // Update state with API response
  } catch (error) {
    console.error(error);
    setError(error.toString() + " - Login failed"); 
  }
}



function Login() {
  const [formMode, setFormMode] = useState('login');
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value; // Assuming 'name' is used for both login and signup
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (formMode === 'signup') {
      await signupApiCall(name, email, password, setApiResponse, setError);
    } else {
      // For login, call the existing login function
      await loginApiCall(name, email, password, setApiResponse, setError);
    }
  }

  function toogleFormMode() {
    setFormMode(formMode === 'login' ? 'signup' : 'login');

  }


  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B090A]">
        <div id="animatedpart" className="loginpage">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label id="girislabel" htmlFor="chk" aria-hidden="true">Kayıt Ol</label> 

              <input id="girisinput" type="text" name="ad" placeholder="Ad" required />
              <input id="girisinput" type="text" name="soyad" placeholder="Soyad" required />
              <input id="girisinput" type="email" name="email" placeholder="Email" required />
              <input id="girisinput" type="password" name="passw" placeholder="Şifre" required />

              <button id="girisbutton" >Kayıt Ol</button>
            </form>
          </div>


          <div className="login">
            <form>
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