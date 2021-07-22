import React from 'react';
import { v4 as uuid } from 'uuid';
import Divider from './Divider';

const Footer = ({ children, className, style, company, year }) => {
  console.log(`Footer ${uuid()}`)

  const renderCopyright = () => {
    return (
      <div align="center">
        <h6>{company}</h6>
        <b>{year}</b>
      </div>
    )
  }

  return (
    <footer className={className} style={style}>
      <Divider />
      <div>{children}</div>
      <div>{renderCopyright()}</div>
    </footer>
  )
}

export default Footer