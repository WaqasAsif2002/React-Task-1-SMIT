import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='Nav'>
      <Navbar {...args}>
        <NavbarBrand href="/">Watches Website in ReactJS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://waqas-asif-portfolio.netlify.app/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/waqasasif2002">
                GitHub
              </NavLink>
            </NavItem>
         
          </Nav>
          <NavbarText>Thank You For Visiting</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;