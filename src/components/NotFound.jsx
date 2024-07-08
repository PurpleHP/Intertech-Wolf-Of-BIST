import React from 'react';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B090A]">
      <div className="bg-[#161A1D] py-12 px-20 rounded-lg shadow-md  text-center items-center m-20 justify-center">
        <h1 className="text-[#D3D3D3] text-5xl mb-6">404 Bulunamadı</h1>
        <h2 className="text-[#D3D3D3] text-2xl">
            Aradığınız sayfa mevcut değil. Bunun bir hata olduğunu düşüyorsanız lütfen bize ulaşın.</h2>
        <a href="/" className="inline-block mt-6 bg-[#D3D3D3] text-[#0B090A] p-3 rounded mx-3">Ana Sayfaya Dön</a>
        <a href="/#contact" className="mx-3 inline-block mt-6 bg-[#D3D3D3] text-[#0B090A] p-3 rounded">Sorunu Bildir</a>

      </div>
    </div>
  );
}

export default NotFoundPage;