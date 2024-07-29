import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom'; // useNavigate ekleyin

function Welcome() {
  const [activeDiv, setActiveDiv] = useState(0);
  const comp = useRef(null);
  const navigate = useNavigate(); // useNavigate kullanımı

  useEffect(() => {
    gsap.to('.content-div', { opacity: 0, duration: 0.5 })
      .then(() => {
        gsap.to(`#div${activeDiv}`, { opacity: 1, duration: 0.5 });
      });
  }, [activeDiv]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from('#intro-slider', {
        xPercent: "-100",
        duration: 1,
        delay: 0.3,
      }).from(['#title-1', '#title-2'], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(['#title-1', '#title-2'], {
        opacity: 0,
        y: "-=30",
        delay: 1,
        stagger: 0.5,
      }).to('#intro-slider', {
        xPercent: "-100",
        duration: 1.8,
      }).from(['#welcome', "#login", "#signup", "#courses", "#bg-image"], {
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
    setTimeout(() => {
      document.getElementById('chk').checked = true; // aria-hidden için login formunu göster
    }, 100); // navigate işlemi tamamlandıktan sonra checkbox'ı seçmek için küçük bir gecikme ekleyin
  };

  return (
    <div className='relative' ref={comp}>
      <div
        id="intro-slider"
        className='h-screen bg-[#161A1D] p-10 justify-center absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight place-items-center'>
        <h1
          id="title-1"
          className='text-4xl md:text-7xl font-bold text-[#D3D3D3]'>Eğitim</h1>
        <h1
          id="title-2"
          className='text-4xl md:text-7xl font-bold text-[#D3D3D3]'>Denizi</h1>
      </div>

      <div className={`content-div ${activeDiv === 0 ? 'visible' : 'hidden'} flex flex-col bg-[#0B090A] justify-center place-items-center h-screen`} id="div0">
        <div id="bg-image"
          style={{
            backgroundImage: `url(${Logo})`,
            opacity: 0.05,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            pointerEvents: 'none',
          }}>
        </div>
        <a
          id="welcome"
          className="font-bold text-4xl md:text-8xl text-[#D3D3D3]">Hoşgeldiniz</a>
        <div className="flex flex-col md:flex-row gap-5">
          <button
            id="login"
            className='text-2xl md:text-7xl my-6 bg-[#161A1D] p-3 rounded-lg mx-3 border-2 text-[#D3D3D3] mb-0'
            onClick={handleLoginClick}>Giriş Yap</button>
          <a
            href="login"
            id="login"
            className='text-2xl md:text-7xl my-6 bg-[#161A1D] p-3 rounded-lg mx-3 border-2 text-[#D3D3D3] mb-0'>Kayıt Ol</a>
        </div>
        <a
          href="home"
          id="courses"
          className='text-2xl md:text-7xl my-3 md:my-6 bg-[#161A1D] p-3 rounded-lg mx-3 border-2 text-[#D3D3D3]'
          style={{ marginTop: '2.5rem' }}>
          Eğitime Gidin
        </a>
      </div>
    </div>
  );
}

export default Welcome;
