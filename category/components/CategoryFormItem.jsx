import React from 'react';
import {Input, Button, Modal, Tabs, Tab, Row, Col, FormControl} from 'react-bootstrap';

export default class CategoryFormItem extends React.Component{

  constructor(props) {
    super();
    this.state = this._getInitialState(props);
  }

  _getInitialState(props) {
    return {
      item: props.item
    };
  }

  changeName(e) {
    this.props.item.name = e.target.value;
    this.props.requestChange(this.props.item);
  }

  render() {
    return(
      <div>
        <FormControl onChange={this.changeName.bind(this)} type="text" />
      </div>
    );
  }

};
