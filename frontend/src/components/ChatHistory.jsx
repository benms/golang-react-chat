import React from 'react'
import Message from './Message'
import styled from 'styled-components'

const StyledChat = styled.div`
  background-color: gray;
  margin: 0;
  padding: 20px;
  h2 {
    margin: 0;
    padding: 0;
    color: white;
  }`

const ChatHistory = ({ chatHistory }) => {
  console.log('Chat history', {chatHistory});

  return (
    <StyledChat>
      <h2>Chat history</h2>
      {
        chatHistory.map((msg) => (
          <Message key={msg.timeStamp} message={msg.data}/>
        ))
      }
    </StyledChat>
  )
}

export default ChatHistory
