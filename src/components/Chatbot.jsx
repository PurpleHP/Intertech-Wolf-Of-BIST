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

    useEffect(() => {


    },[]);

    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const [userLanguages, setUserLanguages] = useState([]);
    const [mainUserLanguage, setMainUserLanguage] = useState('tr');
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const newAiResponse = {
            type: 'ai',
            text: "Merhaba ben Bilgi Denizi, finansal okuryazarlık eğitmeni olarak görev yapıyorum. Amacım, size finansal konularda en güncel ve doğru bilgileri sağlamak. Samimi ve kibar bir yaklaşım sergileyerek, sorularınızı en içten şekilde yanıtlamak için buradayım.\nFinansal okuryazarlık ve finans konularında geniş bir bilgi birikimine sahibim ve sürekli kendimi güncel bilgilerle yeniliyorum. Bu bilgileri kullanarak, sizlere en doğru ve faydalı bilgileri sunuyorum. Öğrencilerimin sorularını kendi geniş veri setimden inceleyerek titizlikle cevaplıyorum. Ancak, sadece kendi uzmanlık alanımdaki konular hakkında bilgi ve fikir sunuyorum.\nBenimle finansal dünyayı keşfetmek, sorularınıza güvenilir cevaplar bulmak ve finansal okuryazarlıkta ilerlemek için hazırsanız, birlikte aklınızdaki soruları cevaplandıralım!",
        };
        setMessages(messages => [...messages, newAiResponse]);
    }, []);


    
    function typeWriterEffect(text, newAiResponse) {
        let i = 0;
        function type() {
            if (i < text.length) {
                newAiResponse.text += text.charAt(i);
                setMessages(messages => [...messages.slice(0, -1), newAiResponse]);
                i++;
                setTimeout(type, 5); //typing speed
            }
        }
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

    useEffect(() => {
        fetch("http://ip-api.com/json")
            .then(response => response.json())
            .then(data => {
                let userLanguage = [data.countryCode.toLowerCase()];
                setMainUserLanguage(userLanguage[0]);
                navigator.languages.forEach(language => {
                    if(language === userLanguage[0]){
                        userLanguage.push(language.toLowerCase());
                    }
                });
                setUserLanguages(userLanguage);
                console.log(userLanguage)
            })
            .catch(error => console.error('Error fetching IP information:', error));
    }, []);

    const sendMessage = async () => {
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
        let modifiedMessageText = "Kullanıcının ana dili: " + mainUserLanguage + ", diğer konuştuğu olası diller: " + userLanguages + " cevap verirken bu dillere öncelik ver:\n" + messageText;
        const newUserMessage = { type: 'user', text: modifiedMessageText };
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
                text: 'Düşünüyorum'
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
                        updatedMessages[updatedMessages.length - 1].text = `Düşünüyorum${dots}`;
                        return updatedMessages;
                    });
                }, 500); // Adjust the interval for the desired speed
            }
            
            function stopLoadingEffect() {
                clearInterval(loadingInterval);
            }
            setLoading(true);

            startLoadingEffect();

            fetch(targetUrl, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    console.log(data.result);
                    const newAiResponse = {
                        type: 'ai',
                        text: data.result
                    };
                    stopLoadingEffect();
                    setLoading(false);

                    setMessages(messages => [...messages.slice(0, -1), newAiResponse]);
                    typeWriterEffect(data.result, newAiResponse);
                    setScrollToBottom(true);
                    //setMessages(messages => [...messages, newAiResponse]);
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("Sunucularımızda sorun var. Lütfen daha sonra tekrar deneyin.");
                });
        } catch (error) {
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
                <div id="chatbot-bubble" className='overflow-auto p-4 my-2 flex flex-col gap-2'>
                    <ul className="flex flex-col w-full">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex rounded-xl items-center ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                                {message.type === 'user' && (
                                    <img src={UserLogo} alt="User" className="items-center lg:w-16 w-6 lg:h-16 h-6 rounded-full ml-2" />
                                )}
                                <li className={`border-2 rounded-xl max-w-[50%] break-words p-2 m-2 ${message.type === 'user' ? 'bg-gray-500 text-white' : 'bg-[#e28109] text-white'}`} style={{ whiteSpace: 'pre-line' }}>
                                    <ReactMarkdown>{message.text}</ReactMarkdown>
                                </li>
                              {message.type === 'ai' && index === messages.length - 1 && (
                                loading ? (
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
