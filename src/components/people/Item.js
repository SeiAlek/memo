import React from 'react';
import { v4 as uuid } from 'uuid';
import Button from '../common/Button';

const Item = ({ className, style, person, handleClick }) => {
  console.log(`Item ${uuid()}`)
  return (
    <li className={className} style={{ display: 'flex', ...style}}>
      <div style={{ display: 'inline-block', padding: '0 16px 0 0' }}>
        <Button 
          text={person.isHired ? 'Fire' : 'Hire'} 
          handleClick={() => handleClick(person.id, !person.isHired)}
        />
      </div>
      <div style={{
        display: 'inline-block', 
        color: `${person.isHired ? 'green': 'black'}` 
      }}>
        <h4 style={{ margin: '0 0 8px'}}>{person.name}</h4>
        <p>{person.address}</p>
      </div>
    </li>
  )
}

export default Item
