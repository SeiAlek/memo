import React from 'react';
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
  return (
  <div className={className} style={style}>
    <Header
      className="header"
      style={{ color: 'blue', textAlign: 'center' }}
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

export default PeopleLayout
