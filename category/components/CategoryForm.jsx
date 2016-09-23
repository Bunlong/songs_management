import React from 'react';
import {Button} from 'react-bootstrap';
import CategoryStore from '../stores/CategoryStore';
import CategoryAction from '../actions/CategoryAction';
import CategoryFormItem from './CategoryFormItem';
import CategoryFormModal from './CategoryFormModal';
import CategoryModel from '../models/CategoryModel';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class CategoryForm extends React.Component {
  constructor(){
    super();
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return ({
      showModal: false,
      currentCategory: {},
      categories: CategoryStore.categories
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

  onRowSelect(row, isSelected, event) {
    CategoryAction.selectCategory(row.id);
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }

  newCategory() {
    this.state.currentCategory = new CategoryModel("");
    this.open();
  }

  render() {
    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(100, 196, 53)",
      onSelect: this.onRowSelect.bind(this),
      hideSelectColumn : true
    };

    return(
      <div>
        <BootstrapTable data={this.state.categories} striped={true} hover={true} selectRow={selectRowProp}>
            <TableHeaderColumn dataField="id" isKey={true}>
              No
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name">
              Name
            </TableHeaderColumn>
        </BootstrapTable>

        <Button onClick={this.newCategory.bind(this)}>Add new category</Button>
        <CategoryFormModal showModal={this.state.showModal} close={this.close.bind(this)} category={this.state.currentCategory} />
      </div>
    );
  }
};
