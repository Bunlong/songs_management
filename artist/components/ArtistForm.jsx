import React from 'react';
import {Button, Panel} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ArtistAction from '../actions/ArtistAction';
import ArtistStore from '../stores/ArtistStore';
import ArtistFormModal from './ArtistFormModal';
import ArtistModel from '../models/ArtistModel';

export default class ArtistForm extends React.Component {
  constructor(){
    super();
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return({
      showModal: false,
      artists: ArtistStore.artists,
      currentArtists: new Array()
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

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  newArtist() {
    this.setState({currentArtists: []});
    this.state.currentArtists.push(new ArtistModel(''));
    this.open();
  }

  render() {
    var title = (
      <h3>Artist</h3>
    );
    
    return(
      <div>
        <Panel header={title}>
          <p className="text-right">
            <Button className="btn-primary" onClick={this.newArtist.bind(this)}>Add new artist</Button>
          </p>
          <BootstrapTable data={this.state.artists} hover={true} condensed={true} pagination={true} search={true}>
              <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>
                No
              </TableHeaderColumn>
              <TableHeaderColumn dataField="name">
                Name
              </TableHeaderColumn>
          </BootstrapTable>
          <ArtistFormModal showModal={this.state.showModal} close={this.close.bind(this)} artists={this.state.currentArtists} />
        </Panel>
      </div>
    );
  }
};
