import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'
import { connect, sendMsg, socket } from './api'
import './App.css'

const App = () => {
  const webSocket = useRef(null);
  const [chatHistory, changeChatHistory] = useState([]);

  webSocket.current = socket;

  useEffect(() => {
    connect((msgObj) => {
      changeChatHistory([...chatHistory, msgObj])
    })
  });

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      sendMsg(e.target.value)
      e.target.value = ''
    }
  }

  console.log(">>> Running react.js chat server");
  return (
    <div className='App'>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={onPressEnter}/>
    </div>
  )
}

export default App
