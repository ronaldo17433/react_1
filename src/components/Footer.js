import React, { Component } from 'react';
import { Navbar,Nav,NavItem} from 'react-bootstrap';



class Footer extends Component {
  render() {
    return (
        <Navbar fixedBottom >
          <Nav>
          <Navbar.Brand>
          <a href="#home">Home</a>
        </Navbar.Brand>   
        <NavItem eventKey={1} href="#">
          Contact
        </NavItem>
        <NavItem eventKey={2} href="#">
          About-Me
        </NavItem>
        </Nav>
          
        </Navbar>
    );
  }
}

export default Footer;