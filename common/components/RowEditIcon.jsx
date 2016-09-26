import React from 'react';
import {Button} from 'react-bootstrap';

export default class RowEditIcon extends React.Component {
  constructor() {
    super();
  }

  redirect() {
    this.props.redirect(this.props.rowId);
  }

  render() {
    return(
      <Button className="btn btn-default" onClick={this.redirect.bind(this)}>
        Edit
      </Button>
    );
  }
}
