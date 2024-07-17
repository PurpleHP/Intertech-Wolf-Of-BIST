import React, { useState } from 'react';

const ChatBot = () => {

    const randomMessage = [
        "Hello! How can I help you today?",
        "What's up?",
        "How can I assist you today?",
        "Lorem"
    ]

    //  { type: 'user', text: 'Hello, how are you?' },
    //  { type: 'ai', text: 'I am fine, thank you!' },
    const [messages, setMessages] = useState([]);

    const [aiResponse, setAiResponse] = useState(randomMessage[Math.floor(Math.random() * randomMessage.length)]);

    const sendMessage = () => { //Post request to the server
        const messageText = document.querySelector('input').value;
        if(messageText.trim().length === 0) {
            alert("Please enter a message to send.");
            return;
        }

        const newUserMessage = { type: 'user', text: messageText };
        const newAiResponse = {
            type: 'ai',
            text: "AI: " + randomMessage[Math.floor(Math.random() * randomMessage.length)]
        };
        setMessages(messages => [...messages, newUserMessage, newAiResponse]);
        document.querySelector('input').value = '';
    }

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <div className='border-red-300 border-2 flex flex-col h-[90vh] w-[90vw] justify-between'>
        <div id="chatbot-bubble" className='overflow-auto p-4 my-2 flex flex-col gap-2'>
                <ul className="flex flex-col w-full">
                    {messages.map((message, index) => (
                        <li key={index} className={`border-2 break-words p-2 m-2 ${message.type === 'user' ? 'self-end bg-gray-500 text-white' : 'self-start bg-orange-600 text-white'} inline-block`}>
                            {message.text}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='w-full flex justify-center pb-4'>
                <div className='flex flex-row w-[85vw]'>
                    <input required type="text" className='flex p-2 w-full mx-2 border-2 border-gray-300 rounded-md focus:border-orange-500 focus:outline-none'></input>
                    <button className='flex px-4 mx-2 py-2 bg-orange-500 text-white rounded hover:bg-orange-700' onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ChatBot;