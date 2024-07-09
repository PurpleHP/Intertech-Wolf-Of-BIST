import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => { //submitledi, sonra backend'e post edilebilir
        e.preventDefault();
        console.log('Form values:', formData);
        if(formData.message.includes("http:") || formData.message.includes("https:") || formData.message.includes(".com") ||
        formData.message.includes("www.")){
            alert("Link İçeren Mesajlar Gönderilemez")
        }
    };

    return (
        <div className="min-h-40vh max-h-50vh flex flex-col items-center justify-center bg-[#0B090A] text-[#D3D3D3]">
            <form className='flex flex-col w-[90vw] mt-5 text-[#0B090A] text-2xl' onSubmit={handleSubmit}>
                <label className='text-[#D3D3D3] my-2' htmlFor="name">İsim</label>
                <input
                    id="name"
                    name="name"
                    className='bg-[#161A1D] text-[#D3D3D3] p-2 rounded text-xl'
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label  className='text-[#D3D3D3] my-2' htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className='bg-[#161A1D] text-[#D3D3D3] p-2 rounded text-xl'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label className='text-[#D3D3D3] my-2' htmlFor="message">Mesajınız</label>
                <textarea
                    id="message"
                    color='black'
                    name="message"
                    className='bg-[#161A1D] text-[#D3D3D3] p-2 rounded text-xl h-40vh w-full'
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                
                <div className='flex my-2 flex-row items-center justify-center'> 
            
                    <button type="submit" className="mt-4 mx-2 text-[#161A1D] bg-[#D3D3D3] hover:bg-white px-4 py-2 rounded">
                        Gönder
                    </button>
                </div>
              
            </form>
        </div>
    );
};

export default ContactForm;                
//Google reCaptcha eklenebilir hem login hem contact formuna (key lazım)
//<div className="turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY"></div> -> cloudflare turnstile alternative
