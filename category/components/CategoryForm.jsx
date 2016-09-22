import React from 'react';
import {Button} from 'react-bootstrap';
import CategoryStore from '../stores/CategoryStore';
import CategoryAction from '../actions/CategoryAction';
import CategoryFormItem from './CategoryFormItem';
import CategoryModel from '../models/CategoryModel';

export default class CategoryForm extends React.Component {
  constructor(){
    super();
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return ({
      categories: CategoryStore.categories,
      category: {}
    });
  }

  componentWillMount() {
    // Call an action
    CategoryAction.getCategories();
    
    // Define an event
    this.changeListener = this._onChange.bind(this);
    CategoryStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    CategoryStore.removeChangeListener(this.changeListener);
  }

  _onChange(e) {
    this.setState({
      categories: CategoryStore.categories
    });
  }

  _findItem() {
    return new CategoryModel("");
  }

  requestChange(category) {
    this.setState({
      category: category
    });
  }

  save() {
    console.log(this.state.category);
  }

  render() {
    return(
      <div>
        <CategoryFormItem item={this._findItem()} requestChange={this.requestChange.bind(this)} />
        <Button onClick={this.save.bind(this)}>Save</Button>
      </div>
    );
  }
};
