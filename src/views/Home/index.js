import React from 'react';

import { Wrapper } from './styles';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import Contacts from '../../components/Contacts';

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Main />
        <Contacts />
      </Wrapper>
    </>
  );
}

export default Home;