import React from 'react';

import { Navbar, Left, Center, Right } from './styles';

import { FaFacebook, FaFacebookMessenger, FaUserCircle } from 'react-icons/fa'
import { AiFillHome, AiFillShop, AiOutlinePlus } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsCollectionPlay } from 'react-icons/bs'
import { HiOutlineUserGroup, HiBell } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'

function Header() {
  return (
    <Navbar>
      <Left>
        <FaFacebook size={46} color="#0B83ED" />
      </Left>

      <Center>
        <div>
          <FaUserCircle size={26} color="#0B83ED" />
        </div>

        <div>
          <FiUsers size={26} color="#666" />
          <span>5</span>
        </div>

        <div>
          <BsCollectionPlay size={26} color="#666" />
          <span>1</span>
        </div>

        <div>
          <AiFillShop size={26} color="#666" />
          <span>4</span>
        </div>

        <div>
          <HiOutlineUserGroup size={26} color="#666" />
        </div>
      </Center>

      <Right>
        <div>
          <FaUserCircle size={30} color="#ddd" />
          <span>Luiz</span>
        </div>

        <div>
          <AiOutlinePlus size={20} color="#333" />
        </div>

        <div>
          <FaFacebookMessenger size={20} color="#333" />
          <span>7</span>
        </div>

        <div>
          <HiBell size={20} color="#333" />
          <span>3</span>
        </div>

        <div>
          <IoMdArrowDropdown size={26} color="#333" />
        </div>

      </Right>
    </Navbar>
  );
}

export default Header;