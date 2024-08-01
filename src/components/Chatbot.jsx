import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import UserLogo from '../assets/imageKurt.png';
import AILogo from '../assets/chatbot.png';
import LoadingGif from '../assets/chatbot.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const ChatBot = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const [userCanType, setUserCanType] = useState(true);
    const chatContainerRef = useRef(null);
    const audioRef = useRef(null);
    const [textToSpeechOn, setTextToSpeechOn] = useState(false);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
            window.location.href = '/login';
        }
    }, []);

    useEffect(() => {
        const initialAiResponse = {
            type: 'ai',
            text: "",
        };
        setMessages(messages => [...messages, initialAiResponse]);
        typeWriterEffect("Merhaba ben Bilgi Denizi, finansal okuryazarlık eğitmeni olarak görev yapıyorum. Amacım, size finansal konularda en güncel ve doğru bilgileri sağlamak. Samimi ve kibar bir yaklaşım sergileyerek, sorularınızı en içten şekilde yanıtlamak için buradayım.\nFinansal okuryazarlık ve finans konularında geniş bir bilgi birikimine sahibim ve sürekli kendimi güncel bilgilerle yeniliyorum. Bu bilgileri kullanarak, sizlere en doğru ve faydalı bilgileri sunuyorum. Öğrencilerimin sorularını kendi geniş veri setimden inceleyerek titizlikle cevaplıyorum. Ancak, sadece kendi uzmanlık alanımdaki konular hakkında bilgi ve fikir sunuyorum.\nBenimle finansal dünyayı keşfetmek, sorularınıza güvenilir cevaplar bulmak ve finansal okuryazarlıkta ilerlemek için hazırsanız, birlikte aklınızdaki soruları cevaplandıralım!", initialAiResponse);
    }, []);

    async function typeWriterEffect(text, messageObj) {
        if (textToSpeechOn) {
            await fetchTextToSpeech(text);
        }
        
        let i = 0;
        messageObj.text = "";
        function type() {
            if (i < text.length) {
                messageObj.text += text.charAt(i);
                setMessages(messages => [...messages.slice(0, -1), messageObj]);
                i++;
                setTimeout(type, 5); // typing speed
            } else {
                setUserCanType(true);
            }
        }
        type();
    }

    async function fetchTextToSpeech(text) {
        try {
            const raw = JSON.stringify({ prompt: text });
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: raw,
                redirect: "follow"
            };
            const response = await fetch('https://mysite-281y.onrender.com/text_to_speech', requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const blob = await response.blob();
            const audioUrl = URL.createObjectURL(blob);
            if (audioRef.current) {
                audioRef.current.src = audioUrl;
                audioRef.current.play().catch(error => {
                    console.error('Error playing audio:', error);
                });
            }
        } catch (error) {
            console.error('Error fetching audio:', error);
        }
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
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const messageText = document.querySelector('input').value;
        document.querySelector('input').value = '';
        if (messageText.trim().length === 0) {
            alert("Lütfen bir mesaj yazın.");
            return;
        }
        if (messageText.trim().length >= 500) {
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
            const raw = JSON.stringify({
                "prompt": messageText
            });

            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: raw,
                redirect: "follow"
            };
            const targetUrl = 'https://mysite-281y.onrender.com/process_prompt';
            const thinkingMessage = {
                type: 'ai',
                text: ''
            };
            setMessages(messages => [...messages, thinkingMessage]);

            let loadingInterval;

            function startLoadingEffect() {
                let dots = '';
                loadingInterval = setInterval(() => {
                    if (dots.length < 3) {
                        dots += '.';
                    } else {
                        dots = '';
                    }
                    setMessages(messages => {
                        const updatedMessages = [...messages];
                        updatedMessages[updatedMessages.length - 1].text = `Düşüncelere Yelken Açıyorum${dots}`;
                        return updatedMessages;
                    });
                }, 500);
            }

            function stopLoadingEffect() {
                clearInterval(loadingInterval);
            }
            setLoading(true);

            startLoadingEffect();

            fetch(targetUrl, requestOptions)
            .then(response => {
                stopLoadingEffect();
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const newAiResponse = {
                    type: 'ai',
                    text: ""
                };
                setLoading(false);
                setMessages(messages => [...messages.slice(0, -1), newAiResponse]);
                const cleanedText = data.result
                .replace(/(\s\s+|\n{3,})/g, function(match) {
                    if (match.includes('\n')) {
                    return '\n\n';
                    } else {
                    return ' ';
                    }
                })
                .replace(/\n{2,}/g, '\n') // fazla satirlarin sayisi iki olsun
                .replace(/\s*\n\s*/g, '\n')
                .replace(/\s{2,}/g, ' ') // fazla bosluklar tek bosluk olsun
                .trim();
                typeWriterEffect(cleanedText, newAiResponse);
                setScrollToBottom(true);
                setUserCanType(true);
            })
            .catch(error => {
                stopLoadingEffect();
                console.error('Error:', error);
                alert("Sunucularımızda sorun var. Lütfen daha sonra tekrar deneyin.");
                const errorMessage = {
                    type: 'ai',
                    text: "Hazine sunucumuz kayboldu! Papağanımız tamir ediyor, daha sonra tekrar deneyin! Argh!"
                };
                setMessages(messages => [...messages.slice(0, -1), errorMessage]);
                setScrollToBottom(true);
            });
        } catch (error) {
            stopLoadingEffect();
            console.error("Failed to fetch AI response:", error);
        }
    }

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
                        <audio ref={audioRef}></audio>
                        <button 
                            className='flex whitespace-nowrap px-4 mx-2 py-2 bg-[#e28109] text-white rounded hover:bg-[#EB5B00] hover:scale-105' 
                            onClick={() => setTextToSpeechOn(!textToSpeechOn)}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <FontAwesomeIcon icon={faHeadphones} color={textToSpeechOn ? "white" : "red"} />
                        </button>
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
