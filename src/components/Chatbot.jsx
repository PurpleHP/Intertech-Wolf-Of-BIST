import React, { useState } from 'react';

const ChatBot = () => {

    const [messages, setMessages] = useState([]);
    
    const sendMessage = () => { //Post request to the server
        const message = document.querySelector('input').value;
        if(message.trim().length === 0) {
            alert("Please enter a message to send.");
            return;
        }

        //setMessages([...messages, "\n+" + message]);
        setMessages("Message: \"" + message + "\" sent to the server. Waiting for response...");
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className=' border-red-300 border-2 flex flex-col h-[90vh] w-[90vw] items-center justify-center'>
                <h1 className='text-5xl text-white mb-8 text-center'>Chatbot</h1>

                <div className=' flex flex-col h-[70vh] w-[90vw] items-end justify-center'>

                </div>

                <div className='flex flex-row w-[85vw]'>
                    <input required type="text" className='flexp-2 mx-2 border-2 border-gray-300 rounded-md focus:border-orange-500 focus:outline-none'></input>
                    <button className='flex px-4 mx-2 py-2 bg-orange-500 text-white rounded hover:bg-orange-700' onClick={sendMessage}>Send</button>
                </div>
             
                <p className='p-4 m-2 text-white whitespace-break-spaces'>{messages}</p>
            </div>
          
        </div>
    );
}

export default ChatBot;