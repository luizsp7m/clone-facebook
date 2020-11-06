import React from 'react';

import { Wrapper } from './styles';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </>
  );
}

export default Home;