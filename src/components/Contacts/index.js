import React from 'react';

import { Container, Row, Wrapper, List } from './styles';

import { FaCamera, FaSearch, FaEllipsisH } from 'react-icons/fa';

function Contacts() {
  return (
    <Container>
      <Row>
        <h5>Contatos</h5>

        <div>
          <FaCamera size={18} color="#65676B" />
          <FaSearch size={18} color="#65676B" style={{ 'margin-left': '22px' }} />
          <FaEllipsisH size={18} color="#65676B" style={{ 'margin-left': '22px' }} />
        </div>
      </Row>

      <List>
        <Contact image="/assets/av_1.jpg" name="Capitão Nascimento" />
        <Contact image="/assets/av_2.jpg" name="Craque Neto" />
      </List>

    </Container>
  );
}

const Contact = ({ image, name }) => (
  <Wrapper src={image}>
    <div />
    <span>{name}</span>
  </Wrapper>
);

export default Contacts;