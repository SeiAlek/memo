import React, { useState, useEffect, useCallback, useRef } from 'react';
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

  const { current: handleHirePerson } = useRef(e => {
    const { personId } = e.currentTarget.dataset;
    api.toggleIsHired(+personId)
    setTransactions(prevTransactions => prevTransactions + 1)
    fetchPeople()
  })

  const { current: handleHireAll } = useRef(() => {
    api.setIsHiredAll()
    setTransactions(prevTransactions => prevTransactions + 1)
    fetchPeople()
  })

  const { current: handleFireAll } = useRef(() => {
    api.setFireAll()
    setTransactions(prevTransactions => prevTransactions + 1)
    fetchPeople()
  })

  const { current: handleResetTransaction } = useRef(() => {
    setTransactions(0)
  })

  return (
    <PeopleLayout
      className="people-layout"
      people={people}
      transactions={transactions}
      handleHireAll={handleHireAll}
      handleFireAll={handleFireAll}
      handleHirePerson={handleHirePerson}
      handleResetTransactions={handleResetTransaction}
    />
  )
}

export default PeopleContainer
