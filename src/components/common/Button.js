import React from 'react';
import { v4 as uuid } from 'uuid';

const Button = ({ className, style, text, handleClick }) => {
  console.log(`Button ${uuid()}`)

  return (
    <button
      type="button"
      className={className}
      style={style} 
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button