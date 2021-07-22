import React, { useState,useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import api from '../../api/people';
import PeopleLayout from './PeopleLayout';

const PeopleContainer = ({ number, handleItemClick }) => {
  console.log(`PeopleContainer ${uuid()}`)

  const [people, setPeople] = useState()
  const [transactions, setTransactions] = useState(0)

  const fetchPeople = () => {
    const data = api.list()
    setPeople(data)
  }

  useEffect(() => {
    fetchPeople()
  }, [])

  const handleHirePerson = (id, isHiredStatus) => {
    api.setIsHired(id, isHiredStatus)
    setTransactions(transactions + 1)
    fetchPeople()
  }

  const handleHireAll = () => {
    api.setIsHiredAll()
    setTransactions(transactions + 1)
    fetchPeople()
  }

  const handleFireAll = () => {
    api.setFireAll()
    setTransactions(transactions + 1)
    fetchPeople()
  }

  return (
    <PeopleLayout
      className="people-layout"
      people={people}
      transactions={transactions}
      handleHireAll={handleHireAll}
      handleFireAll={handleFireAll}
      handleHirePerson={handleHirePerson}
      handleResetTransactions={() => setTransactions(0)}
    />
  )
}

export default PeopleContainer
