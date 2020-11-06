import React from 'react';

import { Wrapper } from './styles';

import { FaUserCircle, FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { BsShieldFill, BsArrowDownShort } from 'react-icons/bs';
import { AiFillShop } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';

function Sidebar() {
  return (
    <Wrapper>
      <div>
        <FaUserCircle size={30} color="#ddd" />
        <span>Luiz Antonio</span>
      </div>

      <div>
        <BsShieldFill size={24} color="#1A7DE8" />
        <span>Central de Informações</span>
      </div>

      <div>
        <FiUsers size={24} color="#1A7DE8" />
        <span>Encontrar amigos</span>
      </div>

      <div>
        <HiOutlineUserGroup size={24} color="#1A7DE8" />
        <span>Grupos</span>
      </div>

      <div>
        <AiFillShop size={24} color="#1A7DE8" />
        <span>Marketplace</span>
      </div>

      <div>
        <BsArrowDownShort size={24} color="#333" className="arrow-down" />
        <span>Ver mais</span>
      </div>

      <hr />

      <h3>Seus atalhos</h3>

      <div>
        <FaGithub size={24} color="#8e44ad" />
        <span>Github</span>
      </div>

      <div>
        <FaNodeJs size={24} color="#27ae60" />
        <span>Node</span>
      </div>

      <div>
        <FaReact size={24} color="#3498db" />
        <span>React</span>
      </div>
    </Wrapper>
  );
}

export default Sidebar;