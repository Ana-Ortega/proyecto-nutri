import React from 'react';
import styled from 'styled-components';
import Burger from './Burguer';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f1f1f1;
  background: #72C0CC;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 30px;
  font-weight: bold;
  float: left;

  .logo {
    padding: 15px 0;
  }


`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nutricion
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
