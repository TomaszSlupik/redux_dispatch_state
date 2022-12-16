import React from 'react'


export default function Addtodoitem({text, complete, onclick}) {


  return (
        <li
        onClick={onclick}
        >
            {text}
        </li>
  )
}
