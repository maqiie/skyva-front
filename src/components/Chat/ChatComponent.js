// ChatComponent.js
import React, { useState, useEffect } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000/cable'); // Replace with your backend URL

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Handle incoming messages
    socket.on('chat_channel', (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      // Cleanup: Disconnect socket when component unmounts
      socket.disconnect();
    };
  }, [messages]);

  const sendMessage = () => {
    // Send message to the backend
    socket.emit('chat_channel', { message: newMessage });

    // Clear the input field
    setNewMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatComponent;
