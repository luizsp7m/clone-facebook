import React from 'react';

import { Container, Wrapper, StorieSection, PostContainer } from './styles';

import { FaUserCircle, FaVideo } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md'; 
import { BiHappyAlt } from 'react-icons/bi';

function Main() {
  return (
    <Container>
      <StorieSection>
        <Storie
          image="https://images.wallpaperscraft.com/image/lake_forest_hills_191782_1280x720.jpg"
          title="Lago"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/forest_trees_sunlight_191877_1280x720.jpg"
          title="Floresta"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/lighthouse_rock_aerial_view_191845_1280x720.jpg"
          title="Farol"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/branch_leaves_yellow_191839_1280x720.jpg"
          title="Folhas"
        />

        <Storie
          image="https://images.wallpaperscraft.com/image/neon_lamp_light_191789_1280x720.jpg"
          title="Leds"
        />
      </StorieSection>

      <Post />
    </Container>
  );
}

const Storie = ({ profile, title, image }) => (
  <Wrapper image={image}>
    <div profile={profile} />
    <span>{title}</span>
  </Wrapper>
);

const Post = () => (
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