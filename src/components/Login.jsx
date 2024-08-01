import './Login.css';
import Navbar from "./Navbar";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [apiResponse, setApiResponse] = useState(null);
  const navigate = useNavigate();

  async function registerUser(name, email, password) {
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
        throw new Error('Kayıt İşlemi Başarısız Oldu!');
      }
      const data = await response.json();
      setApiResponse(data);
      localStorage.setItem('userId', data.userId.toString());
      localStorage.setItem('userName', data.userName);

      // Egitim iliskileri
      const eduIds = [1, 4, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
      const userId = data.userId;
      await addEducationRelations(userId, eduIds);

      // Kullanıcı başarılı bir şekilde kaydolduğunda yönlendirme
      navigate('/quiz');
    } catch (error) {
      console.error(error);
    }
  }

  async function addEducationRelations(userId, eduIds) {
    try {
      const promises = eduIds.map(async (eduId) => {
        const response = await fetch('https://financialtrainerfinal120240716125722.azurewebsites.net/api/Education/addEducationRelationByUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eduId,
            userId,
            RelStatus: ""
          }),
        });

        if (!response.ok) {
          throw new Error(`Eğitim ilişkisi eklenemedi: ${eduId}`);
        }

        const data = await response.json();
        return data;
      });

      await Promise.all(promises);
    } catch (error) {
      console.error('Eğitim ilişkisi eklenirken hata oluştu:', error);
    }
  }

  async function loginUser(email, password) {
    try {
      const response = await fetch('https://financialtrainerfinal120240716125722.azurewebsites.net/api/Login/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.userId === 0) {
        throw new Error('Giriş yapılamadı.');
      }

      setApiResponse(data);

      localStorage.setItem('userId', data.userId.toString());
      localStorage.setItem('userName', data.userName);
      window.location.href = '/home';
    } catch (error) {
      console.error(error);
      alert('Giriş yapılamadı. Lütfen e-posta adresinizi ve şifrenizi kontrol edin.');
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const newName = e.target.ad.value + " " + e.target.soyad.value;
    const newEmail = e.target.email.value;
    const newPassword = e.target.passw.value;

    await registerUser(newName, newEmail, newPassword);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const newEmail = e.target.email.value;
    const newPassword = e.target.passw.value;

    await loginUser(newEmail, newPassword);
  }

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
              <button className="girisbutton">Kayıt Ol</button>
            </form>
          </div>

          <div className="login">
            <form onSubmit={handleLogin}>
              <label className="girislabel" htmlFor="chk" aria-hidden="true">Giriş Yap</label>
              <input className="girisinput" type="email" name="email" placeholder="Email" required />
              <input className="girisinput" type="password" name="passw" placeholder="Şifre" required />
              <button className="girisbutton">Giriş Yap</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
