import React from 'react';
import { v4 as uuid } from 'uuid';

const Header = ({ className, style, title, buttonText, handleClick }) => {
  console.log(`Header ${uuid()}`)

  return (
    <header className={className} style={{ padding: 16, ...style }}>
      <h1>{title}</h1>
      <button onClick={handleClick}>
        {buttonText}
      </button>
    </header>
  )
}

export default Header
