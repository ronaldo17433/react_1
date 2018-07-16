import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Image, Navbar,Nav,NavItem,Glyphicon} from 'react-bootstrap';
import Logo from '../imagens/logo.svg';


class Header extends Component {
  render() {
    return (
      
        <Navbar >   
          <Image src={Logo} className="App-logo" />
          <big>Agenda</big>
          <Nav pullRight>   
          <NavItem>
            <Glyphicon glyph="user" />
            <NavLink to="about_me">About Me</NavLink>
            </NavItem>
            <NavItem>
            <Glyphicon glyph="envelope" />
            <NavLink to="contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
       
        
    );
  }
}

export default Header;