import React from 'react';
import {Input, Button, Modal, Tabs, Tab} from 'react-bootstrap';
import CategoryStore from '../stores/CategoryStore';
import CategoryAction from '../actions/CategoryAction';
import CategoryFormItem from './CategoryFormItem';
import CategoryModel from '../models/CategoryModel';

export default class CategoryFormModal extends React.Component {
  constructor(props) {
    super();
    this.state = this._getInitialState(props);
  }

  _getInitialState(props) {
    return {
      category: props.category
    };
  }

  close() {
    this.props.close();
  }

  _requestChange(category) {
    this.setState({
      category: category
    });
  }

  save() {
    CategoryAction.save(this.state.category);
    this.props.close();
  }

  render() {
    return(
      <div>
        <Modal show={this.props.showModal} onHide={this.close.bind(this)} bsSize="lg">
          <Modal.Header closeButton>
            <Modal.Title>Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CategoryFormItem category={this.props.category} requestChange={this._requestChange.bind(this)} />
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
