import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';
import { useSelector } from 'react-redux';
export default function Header() {
  const clickedButton = useSelector((state) => state.example.clickedButton);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/logout">
        <FaUserAlt size={24} />
      </Link>
      {clickedButton ? 'clicked' : 'not clicked'}
    </Nav>
  );
}
