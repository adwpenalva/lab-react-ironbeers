import React from 'react';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Nav className="justify-content-center" fixed="top" activeKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
