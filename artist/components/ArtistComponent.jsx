import React from 'react';
import {Button} from 'react-bootstrap';
import ArtistForm from './ArtistForm';

export default class ArtistComponent extends React.Component {

  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <ArtistForm />
      </div>
    );
  }
  
};
