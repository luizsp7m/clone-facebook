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
          image="https://images.wallpaperscraft.com/image/single/fractal_pattern_circles_243699_1280x720.jpg"
          title="Lago"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/single/fractal_pattern_circles_243699_1280x720.jpg"
          title="Floresta"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/single/fractal_pattern_circles_243699_1280x720.jpg"
          title="Farol"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/single/fractal_pattern_circles_243699_1280x720.jpg"
          title="Folhas"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/single/fractal_pattern_circles_243699_1280x720.jpg"
          title="Leds"
        />
      </StorieSection>

      <NewPost />

      <Card image="https://images.wallpaperscraft.com/image/single/fractal_pattern_circles_243699_1280x720.jpg" />

      <Card image="https://images.wallpaperscraft.com/image/single/fractal_pattern_circles_243699_1280x720.jpg" />

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