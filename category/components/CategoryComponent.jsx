import React from 'react';
import CategoryForm from './CategoryForm';

export default class CategoryComponent extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <CategoryForm />
      </div>
    );
  }
};
