import React from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class RowDeleteIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  showConfirm() {
    this.open();
  }

  ok() {
    this.props.confirmedDelete(this.props.rowId);
    this.close();
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  render() {
    return(
      <span>
        <Button className="btn btn-default" onClick={this.showConfirm.bind(this)}>
          Delete
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.ok.bind(this)}>OK</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
