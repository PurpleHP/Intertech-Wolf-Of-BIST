import React, { useState,useEffect, useRef  } from 'react';
import { useNavigate } from "react-router-dom";

import UserLogo from '../assets/imageKurt.png';
import AILogo from '../assets/chatbot.png';

const ChatBot = () => {

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if(!storedUserId){
          window.location.href = '/login';} 
      },[]);

    const randomMessage = [
        "Hello! How can I help you today?",
        "What's up?",
        "How can I assist you today?",
        "How are you doing today?",
        "What can I do for you today?",
        "How are you today?",
        "What's new?",
        "What's going on?",
        "Lorem",
        "Ipsum",
    ]

    const [apiResponse, setApiResponse] = useState(null);

    

    const navigate = useNavigate();
 
    const [messages, setMessages] = useState([]);

    

    useEffect(() => {
        const newAiResponse = {
            type: 'ai',
            text: "Merhaba ben Bilgi Denizi, finansal okuryazarlık eğitmeni olarak görev yapıyorum. Amacım, size finansal konularda en güncel ve doğru bilgileri sağlamak. Samimi ve kibar bir yaklaşım sergileyerek, sorularınızı en içten şekilde yanıtlamak için buradayım.\nFinansal okuryazarlık ve finans konularında geniş bir bilgi birikimine sahibim ve sürekli kendimi güncel bilgilerle yeniliyorum. Bu bilgileri kullanarak, sizlere en doğru ve faydalı bilgileri sunuyorum. Öğrencilerimin sorularını kendi geniş veri setimden inceleyerek titizlikle cevaplıyorum. Ancak, sadece kendi uzmanlık alanımdaki konular hakkında bilgi ve fikir sunuyorum.\nBenimle finansal dünyayı keşfetmek, sorularınıza güvenilir cevaplar bulmak ve finansal okuryazarlıkta ilerlemek için hazırsanız, birlikte aklınızdaki soruları cevaplandıralım!",

        };
        setMessages(messages => [...messages, newAiResponse]);
    }, [])

    const sendMessage = async () => { // Make the function async to use await
        const messageText = document.querySelector('input').value;
        document.querySelector('input').value = ''; 
        if(messageText.trim().length === 0) {
            alert("Lütfen bir mesaj yazın.");
            return;
        }
        if(messageText.trim().length >= 500) {
            alert("Lütfen daha kısa bir mesaj yazın.");
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
                        text: data.result // Update this based on the actual API response structure
                    };
                    setMessages(messages => [...messages, newAiResponse]);
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
        const scrollToBottom = () => {
          const chatContainer = document.getElementById('chatbot-bubble');
          if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        };
        scrollToBottom();
      }, [messages])
  
    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <div className='border-[#e28109] rounded-xl border-2 flex flex-col h-[90vh] w-[90vw] justify-between'>
                <div id="chatbot-bubble" className='overflow-auto p-4 my-2 flex flex-col gap-2'>
                    <ul className="flex flex-col w-full">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex rounded-xl items-center ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                                {message.type === 'user' && (
                                        <img src={UserLogo} alt="AI" className="items-center lg:w-16 w-6 lg:h-16 h-6  rounded-full ml-2"/>
                                    )}
                                <li className={`border-2 rounded-xl max-w-[50%] break-words p-2 m-2 ${message.type === 'user' ? 'bg-gray-500 text-white' : 'bg-[#e28109] text-white'}`} dangerouslySetInnerHTML={{ __html: message.texxt }}></li>
                    
                                {message.type === 'ai' && (
                                    <img src={AILogo} alt="AI" className="items-center lg:w-16 w-6 lg:h-16 h-6 mr-2"/>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </ul>
                </div>
            
            <div className='w-full flex justify-center pb-4'>
                <div className='flex flex-row w-[85vw]'>
                    <button  className='flex whitespace-nowrap px-4 mx-2 py-2 w- bg-[#e28109] text-white rounded hover:bg-[#EB5B00] hover:scale-105' onClick={() => navigate("/home")}>Ana Sayfa</button>
                    <input required type="text" onKeyDown={e => e.key  === "Enter" ? sendMessage() : ""} className='flex break-words p-2 w-full mx-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none'></input>
                    <button  className='flex  px-4 mx-2 py-2 text-center items-center justify-center bg-[#e28109] text-white rounded hover:bg-[#EB5B00] hover:scale-105 ' onClick={sendMessage}>Sor</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ChatBot;