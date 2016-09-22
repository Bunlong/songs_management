import React from 'react';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div>
          <LinkContainer to={{pathname: '/categories'}}>
            <a type="button">
              Category
            </a>
          </LinkContainer>
          <LinkContainer to={{pathname: '/artists'}}>
            <a type="button">
              Artist
            </a>
          </LinkContainer>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

};
