import React from 'react';
import {FormControl} from 'react-bootstrap';

export default class CategoryFormItem extends React.Component{

  constructor(props) {
    super();
    this.state = this._getInitialState(props);
  }

  _getInitialState(props) {
    return {
      category: props.category
    };
  }

  changeName(e) {
    this.props.category.name = e.target.value;
    this.props.requestChange(this.props.category);
  }

  render() {
    return(
      <div>
        <FormControl onChange={this.changeName.bind(this)} type="text" />
      </div>
    );
  }

};
