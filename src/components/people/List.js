import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';

import Item from './Item';
import SectionTitle from '../common/SectionTitle'

const List = ({ className, style, people, handleHirePerson, handleHireAll }) => {
  console.log(`List ${uuid()}`)
  const { current: sectionTitleStyles } = useRef({ color: 'green', textAlign: 'center' })
  return (
    <div className={className} style={{ maxWidth: 400, margin: 'auto', ...style }}>
      <SectionTitle
        className="title"
        style={sectionTitleStyles}
        subTitle="Choose the best"
        description="Only strong professionals"
        buttonText="Hire All"
        handleClick={handleHireAll}
      />
      <ul className={className} style={style}>
        {people?.map(person => (
          <Item person={person} key={person.id} handleClick={handleHirePerson} />
        ))}
      </ul>
    </div>
  )
}

export default List
