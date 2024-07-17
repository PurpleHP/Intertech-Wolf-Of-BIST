import React, { useState,useEffect, useRef  } from 'react';
import AILogo from '../assets/imageKurt.png';
import AIGif from '../assets/kurt.gif';
import UserLogo from "../assets/nerd.png";

const ChatBot = () => {

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

    //  { type: 'user', text: 'Hello, how are you?' },
    //  { type: 'ai', text: 'I am fine, thank you!' },
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        const newAiResponse = {
            type: 'ai',
            text: "Merhaba, size nasıl yardımcı olabilirim?",

        };
        setMessages(messages => [...messages, newAiResponse]);
    }, []
        )

    const sendMessage = () => { //Post request to the server
        const messageText = document.querySelector('input').value;
        if(messageText.trim().length === 0) {
            alert("Please enter a message to send.");
            return;
        }
        if(messageText.trim().length >= 500) {
            alert("Please enter a message shorter than 500 characters.");
            return;
        }

        const newUserMessage = { type: 'user', text: messageText };
        const newAiResponse = {
            type: 'ai',
            text: randomMessage[Math.floor(Math.random() * randomMessage.length)]
        };
        setMessages(messages => [...messages, newUserMessage, newAiResponse]);
        document.querySelector('input').value = '';
    }
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]); //runs every time after entering a message
  
    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <div className='border-red-300 border-2 flex flex-col h-[90vh] w-[90vw] justify-between'>
                <div id="chatbot-bubble" className='overflow-auto p-4 my-2 flex flex-col gap-2'>
                    <ul className="flex flex-col w-full">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex  items-center ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                                {message.type === 'user' && (
                                        <img src={UserLogo} alt="AI" className="items-center lg:w-16 w-6 lg:h-16 h-6  rounded-full ml-2"/>
                                    )}
                                <li className={`border-2 max-w-[50%] break-words p-2 m-2 ${message.type === 'user' ? 'bg-gray-500 text-white' : 'bg-orange-600 text-white'}`}>
                                    {message.text}
                                </li>
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
                    <input required type="text" className='flex break-words p-2 w-full mx-2 border-2 border-gray-300 rounded-md focus:border-orange-500 focus:outline-none'></input>
                    <button className='flex px-4 mx-2 py-2 bg-orange-500 text-white rounded hover:bg-orange-700' onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ChatBot;