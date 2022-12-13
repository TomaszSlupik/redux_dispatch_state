import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export default function Mainprovider() {

    const theme = {
            main: 'gray', 
            last: 'blue'
    }
    
    const Btnmain = styled.button`
    background-color: ${props => props.main ? props.theme.main : props.theme.last};
    width: 150px;
    height: 40px;
    cursor: pointer;
    color: black;
    border-radius: 8px;
    `

  return (
    <div>
        <ThemeProvider theme={theme}>
                <Btnmain
                main
                >Pierwszy</Btnmain>

                <Btnmain
                >Drugi</Btnmain>
        </ThemeProvider>
    </div>
  )
}
