import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import UserLogo from '../assets/imageKurt.png';
import AILogo from '../assets/chatbot.png';
import LoadingGif from '../assets/chatbot.gif';

const ChatBot = () => {
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
            window.location.href = '/login';
        }
    }, []);

    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const [userCanType, setUserCanType] = useState(true);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const initialMessage = "Merhaba ben Bilgi Denizi, finansal okuryazarlık eğitmeni olarak görev yapıyorum. Amacım, size finansal konularda en güncel ve doğru bilgileri sağlamak. Samimi ve kibar bir yaklaşım sergileyerek, sorularınızı en içten şekilde yanıtlamak için buradayım.\nFinansal okuryazarlık ve finans konularında geniş bir bilgi birikimine sahibim ve sürekli kendimi güncel bilgilerle yeniliyorum. Bu bilgileri kullanarak, sizlere en doğru ve faydalı bilgileri sunuyorum. Öğrencilerimin sorularını kendi geniş veri setimden inceleyerek titizlikle cevaplıyorum. Ancak, sadece kendi uzmanlık alanımdaki konular hakkında bilgi ve fikir sunuyorum.\nBenimle finansal dünyayı keşfetmek, sorularınıza güvenilir cevaplar bulmak ve finansal okuryazarlıkta ilerlemek için hazırsanız, birlikte aklınızdaki soruları cevaplandıralım!";
        typeWriterEffect(initialMessage);
    }, []);

    function typeWriterEffect(text) {
        let i = 0;
        let displayText = "";
        function type() {
            if (i < text.length) {
                displayText += text.charAt(i);
                setMessages(messages => [...messages.slice(0, -1), { type: 'ai', text: displayText }]);
                i++;
                setTimeout(type, 5); // typing speed
            } else {
                setUserCanType(true); // Allow user to type after the message is fully displayed
            }
        }
        setMessages(messages => [...messages, { type: 'ai', text: "" }]);
        type();
    }

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            const handleScroll = () => {
                if (chatContainer.scrollTop + chatContainer.clientHeight < chatContainer.scrollHeight) {
                    setScrollToBottom(false);
                } else {
                    setScrollToBottom(true);
                }
            };
            chatContainer.addEventListener('scroll', handleScroll);
            return () => chatContainer.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const sendMessage = async () => {
        const messageText = document.querySelector('input').value.trim();
        document.querySelector('input').value = '';
        if (messageText.length === 0) {
            alert("Lütfen bir mesaj yazın.");
            return;
        }
        if (messageText.length >= 500) {
            alert("Lütfen daha kısa bir mesaj yazın.");
            return;
        }
        if (!userCanType) {
            alert("Şu anda önceki mesajınızı düşünüyorum. Lütfen bekleyin.");
            return;
        }
        const newUserMessage = { type: 'user', text: messageText };
        setMessages(messages => [...messages, newUserMessage]);

        try {
            const raw = JSON.stringify({ "prompt": messageText });

            const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: raw,
                redirect: "follow"
            };
            const targetUrl = 'https://mysite-281y.onrender.com/process_prompt';
            setLoading(true);
            setMessages(messages => [...messages, { type: 'ai', text: 'Düşünüyorum' }]);

            const response = await fetch(targetUrl, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            const aiResponse = data.result.trim();
            setLoading(false);
            setMessages(messages => messages.slice(0, -1));
            typeWriterEffect(aiResponse);
        } catch (error) {
            setLoading(false);
            console.error('Error:', error);
            alert("Sunucularımızda sorun var. Lütfen daha sonra tekrar deneyin.");
        }
    };

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (scrollToBottom) {
            const chatContainer = chatContainerRef.current;
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        }
    }, [messages, scrollToBottom]);

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center'>
            <div className='border-[#e28109] rounded-xl border-2 flex flex-col h-[90vh] w-[90vw] justify-between'>
                <div id="chatbot-bubble" className='overflow-auto p-4 my-2 flex flex-col gap-2' ref={chatContainerRef}>
                    <ul className="flex flex-col w-full">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex rounded-xl items-center ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                                {message.type === 'user' && (
                                    <img src={UserLogo} alt="User" className="items-center lg:w-16 w-6 lg:h-16 h-6 rounded-full ml-2" />
                                )}
                                <li className={`border-2 rounded-xl max-w-[50%] break-words p-2 m-2 ${message.type === 'user' ? 'bg-gray-500 text-white' : 'bg-[#e28109] text-white'}`} style={{ whiteSpace: 'pre-line' }}>
                                    <ReactMarkdown>{message.text}</ReactMarkdown>
                                </li>
                                {message.type === 'ai' && (
                                    index === messages.length - 1 && loading ? (
                                        <img src={LoadingGif} alt="AI" className="items-center lg:w-16 w-6 lg:h-16 h-6 mr-2" />
                                    ) : (
                                        <img src={AILogo} alt="AI" className="items-center lg:w-16 w-6 lg:h-16 h-6 mr-2" />
                                    )
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </ul>
                </div>
                <div className='w-full flex justify-center pb-4'>
                    <div className='flex flex-row w-[85vw]'>
                        <button className='flex whitespace-nowrap px-4 mx-2 py-2 bg-[#e28109] text-white rounded hover:bg-[#EB5B00] hover:scale-105' onClick={() => navigate("/home")}>Ana Sayfa</button>
                        <input required type="text" onKeyDown={e => e.key === "Enter" ? sendMessage() : ""} className='flex break-words p-2 w-full mx-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none' />
                        <button className='flex px-4 mx-2 py-2 text-center items-center justify-center bg-[#e28109] text-white rounded hover:bg-[#EB5B00] hover:scale-105' onClick={sendMessage}>Sor</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;
