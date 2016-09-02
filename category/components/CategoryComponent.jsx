import React from 'react';
import {Button} from 'react-bootstrap';
import CategoryAction from '../actions/CategoryAction';
import CategoryStore from '../stores/CategoryStore';

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
    CategoryAction.getCategories({"id": 1, "name": "phone"});
    this.changeListener = this._onChange.bind(this);
  }

  componentDidMount() {
    CategoryStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    CategoryStore.removeChangeListener(this.changeListener);
  }

  _onChange(e){
    this.setState({
      categories: CategoryStore.categories
    });
  }

  save() {
    console.log(CategoryStore.categories);
    CategoryAction.saveCategory("data");
  }

  render() {
    return(
      <div>
        <Button onClick={this.save.bind(this)}>Save</Button>
      </div>
    );
  }
  
};