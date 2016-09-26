import React from 'react';
import {Button, Panel} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ArtistAction from '../actions/ArtistAction';
import ArtistStore from '../stores/ArtistStore';

export default class ArtistForm extends React.Component {
  constructor(){
    super();
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return({
      showModal: false,
      artists: ArtistStore.artists
    });
  }

  componentWillMount() {
    // Call an action
    ArtistAction.getArtists();
    
    // Define an event
    this.changeListener = this._onChange.bind(this);
    ArtistStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    ArtistStore.removeChangeListener(this.changeListener);
  }

  _onChange(e) {
    this.setState({
      artists: ArtistStore.artists
    });
  }

  render() {
    var title = (
      <h3>Artist</h3>
    );
    
    console.log(this.state.artists);

    return(
      <div>
        <Panel header={title}>
          <p className="text-right">
            <Button className="btn-primary">Add new artist</Button>
          </p>
        </Panel>
      </div>
    );
  }
};
