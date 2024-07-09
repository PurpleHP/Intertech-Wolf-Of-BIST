import Navbar from "./Navbar";

function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B090A]">
      <div className="bg-[#161A1D] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-[#D3D3D3] text-2xl mb-6">Giriş Yap</h2>
        <form>
          <div className="mb-4">
            <label className="block text-[#D3D3D3] mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
          </div>
          <div className="mb-6">
            <label className="block text-[#D3D3D3] mb-2" htmlFor="password">Şifre</label>
            <input type="password" id="password" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
          </div>
          <button type="submit" className="w-full bg-[#D3D3D3] text-[#0B090A] p-2 rounded">Giriş Yap</button>
        </form>
      </div>
      <h3 className="text-white text-xl mt-10">Hesabınız Yok Mu?</h3>
      <a href="signup" className="text-white bg-[#161A1D] p-3 rounded-lg text-xl mt-2">Kayıt Olun</a>

    </div>
    </div>
  
  );
}

export default Login;