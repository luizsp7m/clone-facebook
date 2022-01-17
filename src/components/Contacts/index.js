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
        <Contact image="https://pbs.twimg.com/profile_images/1252216496530620416/HU6g_1Te_400x400.jpg" name="Mudou nome" />
        <Contact image="https://www.dicasdemulher.com.br/wp-content/uploads/2011/10/capitao-nascimento-carreira.jpg" name="Sueli" />
        <Contact image="https://pbs.twimg.com/media/EDEvfs2XkAUVrDY.jpg" name="Video" />
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