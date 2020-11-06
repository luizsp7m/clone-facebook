import React from 'react';

import { Container, Wrapper, StorieSection } from './styles';

function Main() {
  return (
    <Container>
      <StorieSection>
        <Storie profile="https://i.imgur.com/j6iHZs5_d.webp?maxwidth=728&fidelity=grand" />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
      </StorieSection>
    </Container>
  );
}

const Storie = ({ profile, title, image }) => (
  <Wrapper>
    <img src={profile} />
    <span>title</span>
  </Wrapper>
);

export default Main;