import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: white;

  li {
    padding: 18px 10px;
    font-size: 20px;

  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
  }

  a:hover {
    background: #E4ECEE;
    border-radius: 50px;
    color: #72C0CC;
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:  #72C0CC;
    font-weight: bold;
    font-size: 25px;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      font-size: 20px;

    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a><Link to="/contacto">Contacto</Link></a></li>
      <li><a><Link to="/nutriologa">Nutriologa</Link></a></li>
      <li><a><Link to="/principal">Principal</Link></a></li>
    </Ul>
  )
}

export default RightNav
