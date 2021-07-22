import React from 'react';
import { v4 as uuid } from 'uuid';

const Divider = ({ children, className, style, company, year }) => {
  console.log(`Divider ${uuid()}`)


  return (
    <div style={{ height: 1, backgroundColor: 'black', margin: '8px 0' }} />
  )
}

export default Divider