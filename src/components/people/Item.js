import React, { useMemo, memo } from 'react';
import Button from '../common/Button';

const Item = ({ className, style, person, handleClick }) => {
  console.log(`Item ${person.name}`)

  console.log('person isHired', person.isHired)
  const dataAttributes = useMemo(() => ({
    'data-person-id': person.id,
  }), [person.id])

  return (
    <li className={className} style={{ display: 'flex', ...style}}>
      <div style={{ display: 'inline-block', padding: '0 16px 0 0' }}>
        <Button 
          text={person.isHired ? 'Fire' : 'Hire'}
          dataAttributes={dataAttributes}
          handleClick={handleClick}
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

export default memo(Item)
