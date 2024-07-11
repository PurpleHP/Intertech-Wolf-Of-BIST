import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Logo from '../assets/logo.png';

function Welcome() {

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(()=> {
      const t1 = gsap.timeline();
      t1.from('#intro-slider', {
        xPercent: "-100", //nereden başlayacağı
        duration: 1.8, //slide animasyon süresi
        delay: 1, //slide olmadan önceki süre
      }).from(['#title-1', '#title-2'], {
        opacity: 0, //opacity 0'dan başlat
        y: "+=30", //yukarı çıkması
        stagger: 0.5, //delay between animations
      }).to(['#title-1', '#title-2'], {
        opacity: 0,
        y: "-=30", //textlerin aşağı geri inmesi,
        delay: 1, //animasyon tekrar oynamadan önce
        stagger: 0.5, //delay between animations
      }).to('#intro-slider', {
        xPercent: "-100",
        duration: 1.8,
    }).from(['#welcome', "#login", "#signup", "#bg-image"], {
      opacity: 0,
      duration: 0.5,stagger: 0.5
    })
    }, comp)
    return () => ctx.revert(); //animations will be removed when the component is unmounted
  },[]);

  return (
    <div className='relative' ref={comp}>
      <div 
      id="intro-slider"
      className='h-screen bg-[#161A1D] p-10 justify-center absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight place-items-center'>
           <h1
          id="title-1" 
          className='text-7xl text-bold text-[#D3D3D3]'>Eğitim</h1>
          <h1 
          id="title-2"
          className='text-7xl  text-bold text-[#D3D3D3]'>Denizi!</h1>
      </div>
      <div id="bg-image"
    style={{
      backgroundImage: `url(${Logo})`,
      opacity: 0.3,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>
      <div 
        className="flex flex-col bg-[#0B090A] justify-center place-items-center h-screen">
        <a
          id="welcome" 
          className="font-bold text-8xl text-[#D3D3D3]">Hoşgeldiniz</a>
          <div className="flex flex-row gap-5">
            <a
              href="login"
              id="login" 
              className='text-7xl my-6 bg-[#161A1D] p-3 rounded-lg  mx-3 border-2 text-[#D3D3D3]'>Giriş Yap</a>
            <a 
              href="signup"
              id="signup"
              className='text-7xl my-6 bg-[#161A1D] p-3 rounded-lg  mx-3 border-2 text-[#D3D3D3]'>Kayıt Ol</a>
          </div>
      </div>
    </div>
 
  );
}

export default Welcome;