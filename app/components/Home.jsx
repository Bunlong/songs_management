import React from 'react';
import {Button} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <div>
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
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};
