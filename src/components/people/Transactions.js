import React from 'react';
import { v4 as uuid } from 'uuid';

import Button from '../common/Button'

const Transactions = ({ className, style, count, handleClick }) => {
  console.log(`Transactions ${uuid()}`)
  return (
    <div className={className} style={style}>
      Transactions: {count}
     <Button
      style={{ 
        border: 0, 
        borderRadius: 8, 
        background: 'red', 
        color: 'white', 
        marginLeft: 8, 
        padding: 8,
      }}
      text="Reset transactions"
      handleClick={handleClick}
     />
    </div>
  )
}

export default Transactions
