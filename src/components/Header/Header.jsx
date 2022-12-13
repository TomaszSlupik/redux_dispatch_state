import React from 'react'
import styled from 'styled-components'
import './Header.css'

export default function Header() {

    const Title = styled.h1 `
    margin-top: 1em,
    font-Size: 3rem,
    color: white
    `
    const Textheader = styled.h2`
    fontSize: 2rem;
    color: ${props => props.primary ? 'white' : 'black'}
    `

    const Textmini = styled(Textheader) `
    color: gold
    `

  return (
    <div>
        <Title>
            React średnio zaawansowany
        </Title>

        <div className="headerText">
            <Textheader
            primary
            >To jest z propsem</Textheader>

            <Textheader
            >To jest bez niczego</Textheader>

            <Textmini> Właściwości pobrane z tekstu</Textmini>
        </div>

    </div>
  )
}
