import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.div`
  display: block;
  background-color: beige;
  margin: 10px auto;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-radius: 5px;
  clear: both;

  &.me{
    color: rgba(70, 28, 28);
    float: right;
    background-color: bisque;
  }
`

const Message = ({ message }) => {
  const msg = JSON.parse(message);

  return (
    <StyledMessage>{msg.body}</StyledMessage>
  )
}

export default Message
