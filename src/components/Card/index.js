import React from 'react';

import { Container, Row, Legend, Image, Information, Options } from './styles';

import { FaEllipsisH, FaRegCommentAlt, FaShare } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';

function Card(props) {
  return (
    <Container>
      <Row>
        <div>
          <div className="profile" />
          <h5>Luiz Antonio</h5>
        </div>

        <div>
          <FaEllipsisH size={16} color="#666" />
        </div>
      </Row>

      <Legend>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet magna a magna tristique vulputate. Aenean purus leo, bibendum et convallis ac.
        </p>
      </Legend>

      <Image src={props.image}>
        <div />
      </Image>

      <Information>
        <div>
          <AiFillLike size={18} color="#007fff" />
          <span>1,5 mil</span>
        </div>
        <div>
          <span>28 comentários</span>
          <span>8 compartilhamentos</span>
        </div>
      </Information>

      <Options>
        <div>
          <BiLike size={24} color="#666" />
          <span>Curtir</span>
        </div>

        <div>
          <FaRegCommentAlt size={18} color="#666" />
          <span>Comentar</span>
        </div>

        <div>
          <FaShare size={18} color="#666" />
          <span>Compartilhar</span>
        </div>
      </Options>
    </Container>
  );
}

export default Card;