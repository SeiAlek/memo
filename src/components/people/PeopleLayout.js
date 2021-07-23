import React, { useRef, memo } from 'react';
import { v4 as uuid } from 'uuid';


import Header from '../common/Header';
import PeopleList from './List';
import Transactions from './Transactions';
import Divider from '../common/Divider';

const PeopleLayout = ({ 
  className, 
  style, 
  people,
  transactions, 
  handleHireAll,
  handleFireAll, 
  handleHirePerson,
  handleResetTransactions,
}) => {
  console.log(`PeopleLayout ${uuid()}`)
  const { current: headerStyle }= useRef({ color: 'blue', textAlign: 'center' })
  return (
  <div className={className} style={style}>
    <Header
      className="header"
      style={headerStyle}
      title="Professionals is the key to success"
      buttonText="Fire All"
      handleClick={handleFireAll}
    />
      <Divider />
      <Transactions
        style={{ 
          borderRadius: 8, 
          border: '1px solid green', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          width: 'max-content', 
          margin: 'auto',
          padding: 8,
        }}
        count={transactions}
        handleClick={handleResetTransactions}
      />
      <Divider />
      <PeopleList
        people={people} 
        handleHirePerson={handleHirePerson}
        handleHireAll={handleHireAll}
      />
    </div>
  )
}

export default memo(PeopleLayout)
