import React from 'react';
import { v4 as uuid } from 'uuid';

import Footer from '../common/Footer';
import PeopleContainer from '../people/PeopleContainer';

const AppContainer = () => {
  console.log(`AppContainer ${uuid()}`)
  return (
    <>
      <PeopleContainer />
      <Footer company="The Best People Inc." year={new Date().getFullYear()}>
        <h2 align="center">Smart Solutions</h2>
      </Footer>
    </>
  )
}

export default AppContainer
