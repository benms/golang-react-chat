import React from 'react'
import styled from 'styled-components'

const StyledChatInput = styled.div`
width: 95;
  display: block;
  margin: auto;

  input {
    padding: 10px;
    margin: 0;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 98%;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  }
`

const ChatInput = ({ send }) => {
  return (
    <StyledChatInput>
      <input onKeyDown={send} placeholder="Type a message" type="text" />
    </StyledChatInput>
  )
}

export default ChatInput