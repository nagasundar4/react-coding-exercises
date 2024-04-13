{/*
Create a React component called ChatApp that simulates a chat interface. Users should be able to send and receive messages in real-time.

Expected Output:
[Message Input Field]
[Send Button]
[Chat Window]
*/}
import React, { useState, useEffect } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Initial message from ChatBot when component mounts
    setMessages([{ text: 'Hello from ChatBot!', sender: 'bot' }]);
  }, []);

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
      setMessages(updatedMessages);
      setNewMessage('');
      // Simulate receiving a response after some delay
      setTimeout(() => {
        setMessages([...updatedMessages, { text: `${newMessage} from ChatBot!`, sender: 'bot' }]);
      }, 500);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '5px', textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <span style={{ backgroundColor: message.sender === 'user' ? '#d3f4ff' : '#f0f0f0', padding: '5px 10px', borderRadius: '10px' }}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatApp;
