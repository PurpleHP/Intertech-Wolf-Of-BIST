import './Home.css';
import NavbarComponent from './Navbar.jsx';
import Menu from './Menu.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

function Contact() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B090A]">
        <div className="bg-[#161A1D] p-8 rounded-lg shadow-md w-96">
          <h2 className="text-[#D3D3D3] text-2xl mb-6">Bize Ulaş!</h2>
          <form>
            <div className="mb-4">
              <label className="block text-[#D3D3D3] mb-2" htmlFor="email">İsim</label>
              <input type="text" id="email" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
            </div>
            <div className="mb-4">
              <label className="block text-[#D3D3D3] mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded bg-[#0B090A] text-[#D3D3D3]" />
            </div>

            <button type="submit" className="w-full bg-[#D3D3D3] text-[#0B090A] p-2 rounded">Gönder</button>
          </form>
        </div>


      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
