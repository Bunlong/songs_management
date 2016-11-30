import React from 'react';
import {FormControl} from 'react-bootstrap';

export default class ArtistFormItem extends React.Component{

  constructor(props) {
    super();
    this.state = this._getInitialState(props);
  }

  _getInitialState(props) {
    return {
      artist: props.artist
    };
  }

  changeName(e) {
    this.props.artist.name = e.target.value;
  }

  render() {
    return(
      <div>
        <p>
          <FormControl type="text" defaultValue={this.state.artist.name} onChange={this.changeName.bind(this)} />
        </p>
      </div>
    );
  }

};
