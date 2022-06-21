import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: blue;
  color: blanchedalmond;
  max-width: 100%;
  padding: 50px;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 4em;
    text-align: center;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <p>Go to React.js/Golang chat app</p>
    </StyledHeader>
  )
}

export default Header
