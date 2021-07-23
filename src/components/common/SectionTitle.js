import React, { memo } from 'react';

import Button from './Button';

const SubHeader = ({ className, style, subTitle, description, buttonText, handleClick }) => {
  console.log(`SubHeader`)

  return (
    <div className={className} style={style}>
      <h2>{subTitle}</h2>
      <h5>{description}</h5>
      <Button text={buttonText} handleClick={handleClick} />
    </div>
  )
}

export default memo(SubHeader)
