import React from 'react';
import {Button} from 'react-bootstrap';
import CategoryStore from '../stores/CategoryStore';
import CategoryAction from '../actions/CategoryAction';

export default class CategoryComponent extends React.Component {

  constructor(){
    super();
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return ({
      categories: CategoryStore.categories
    });
  }

  componentWillMount() {
    // Define an event
    this.changeListener = this._onChange.bind(this);
    CategoryStore.addChangeListener(this.changeListener);

    // Call an action
    CategoryAction.getCategories();
  }

  componentWillUnmount() {
    CategoryStore.removeChangeListener(this.changeListener);
  }

  _onChange(e) {
    this.setState({
      categories: CategoryStore.categories
    });
  }

  render() {
    console.log(this.state.categories);
    return(
      <div>
        Song Managements
      </div>
    );
  }
  
};
