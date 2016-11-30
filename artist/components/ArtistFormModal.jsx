import React from 'react';
import {Input, Button, Modal, Tabs, Tab} from 'react-bootstrap';
import ArtistFormItem from './ArtistFormItem';
import ArtistModel from '../models/ArtistModel';
import ArtistAction from '../actions/ArtistAction';

export default class ArtistFormModal extends React.Component {
  constructor(props) {
    super();
    this.state = this._getInitialState(props);
  }

  _getInitialState(props) {
    return {
      artists: props.artists,
      items: []
    };
  }

  close() {
    this.props.close();
  }

  save() {
    // ArtistAction.save(this.state.artists);
    // this.props.close();
  }

  addMore() {
    this.state.artists.push(new ArtistModel(''));
    this.state.items.push(<ArtistFormItem key={this.state.artists.length - 1} artist={this.state.artists[this.state.artists.length - 1]} />);
    this.setState({items: this.state.items});
  }

  render() {
    if(this.state.artists.length === 1) {
      this.state.items.push(<ArtistFormItem key={this.state.artists.length - 1} artist={this.state.artists[this.state.artists.length - 1]} />);
    }

    return(
      <div>
        <Modal show={this.props.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Artist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.items.map(function(item, i){
              return item;
            })}
            <Button onClick={this.addMore.bind(this)}>Add more</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.save.bind(this)}>Save</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
