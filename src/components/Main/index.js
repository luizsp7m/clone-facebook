import React from 'react';

import { Container, Wrapper, StorieSection, PostContainer } from './styles';

import { FaUserCircle, FaVideo } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { BiHappyAlt } from 'react-icons/bi';

import Card from '../Card';

function Main() {
  return (
    <Container>
      <StorieSection>
        <Storie
          image="/assets/story_1.jpg"
          title="Lago"
        />

        <Storie
          image="/assets/story_2.jpg"
          title="Tronco"
        />

        <Storie
          image="/assets/story_3.jpg"
          title="Folha"
        />

        <Storie
          image="/assets/story_4.jpg"

          title="Cachoeira"
        />

        <Storie
          image="/assets/story_5.jpg"
          title="Balões"
        />
      </StorieSection>

      <NewPost />

      <Card image="/assets/pub_1.jpg" />

      <Card image="/assets/pub_2.jpg" />

    </Container>
  );
}

const Storie = ({ profile, title, image }) => (
  <Wrapper image={image}>
    <div profile={profile} />
    <span>{title}</span>
  </Wrapper>
);

const NewPost = () => (
  <PostContainer>
    <div>
      <FaUserCircle size={48} color="#ddd" />
      <input type="text" placeholder="No que você está pensando, Luiz?" />
    </div>

    <hr />

    <div>
      <div>
        <FaVideo size={24} color="#E42645" />
        <span>Vídeo ao vivo</span>
      </div>

      <div>
        <MdPhotoLibrary size={24} color="#74C587" />
        <span>Foto / Vídeo</span>
      </div>

      <div>
        <BiHappyAlt size={24} color="#fbc531" />
        <span>Sentimento / Atividade</span>
      </div>
    </div>
  </PostContainer>
);

export default Main;