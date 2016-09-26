import React from 'react';
import {Navbar, Button, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <Navbar>
          <Nav className="nav navbar-nav">
            <LinkContainer to={{pathname: '/categories'}}>
              <NavItem to="categories" href='#'>
                Category
              </NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/artists'}}>
              <NavItem to="artists" href='#'>
                Artist
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
};
