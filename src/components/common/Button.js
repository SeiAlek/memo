import React, { memo } from 'react';

const Button = ({ className, style, text, dataAttributes = {}, handleClick }) => {
  console.log(`Button ${text}`)

  return (
    <button
      type="button"
      className={className}
      style={style} 
      onClick={handleClick}
      { ...dataAttributes }
    >
      {text}
    </button>
  )
}

export default memo(Button)