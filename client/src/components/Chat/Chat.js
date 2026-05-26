import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css'; // eslint-disable-line import/order

const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://chat.app.aletcloud.com' : 'http://localhost:5000';

let socket;

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name: parsedName, room: parsedRoom } = queryString.parse(location.search);

    socket = io(ENDPOINT, { transports: ['websocket', 'polling'] });

    setRoom(parsedRoom);
    setName(parsedName);

    socket.emit('join', { name: parsedName, room: parsedRoom }, error => {
      if (error) {
        alert(error);
      }
    });

    socket.on('message', incomingMessage => {
      setMessages(prevMessages => [...prevMessages, incomingMessage]);
    });

    socket.on('roomData', ({ users: roomUsers }) => {
      setUsers(roomUsers);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
