import './Login.css';
import Navbar from "./Navbar";

function Login() {
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