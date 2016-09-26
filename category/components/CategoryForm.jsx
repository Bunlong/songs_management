import React from 'react';
import {Button, Panel} from 'react-bootstrap';
import CategoryStore from '../stores/CategoryStore';
import CategoryAction from '../actions/CategoryAction';
import CategoryFormModal from './CategoryFormModal';
import CategoryModel from '../models/CategoryModel';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import RowEditIcon from '../../common/components/RowEditIcon';
import RowDeleteIcon from '../../common/components/RowDeleteIcon';

export default class CategoryForm extends React.Component {
  constructor(){
    super();
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return({
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

  editGoalRedirect(rowId) {
    this.setState({
      currentCategory:  this.state.categories.find(function (category){
                          return category.id === rowId;
                        })
    });

    this.open();
  }

  confirmedDelete(rowId) {
    var category = new CategoryModel("");
    category.id = rowId;
    CategoryAction.delete(category);
  }

  render() {
    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "rgb(100, 196, 53)",
      onSelect: this.onRowSelect.bind(this),
      hideSelectColumn : true
    };

    var self = this;

    function editIconFormatter(cell, row){
      return(
        <div>
          <RowEditIcon rowId={row.id} redirect={self.editGoalRedirect.bind(self)} />
          <RowDeleteIcon rowId={row.id} confirmedDelete={self.confirmedDelete.bind(self)}/>
        </div>
      );
    }

    var title = (
      <h3>Category</h3>
    );

    return(
      <div>
        <Panel header={title}>
          <p className="text-right">
            <Button onClick={this.newCategory.bind(this)} className="btn-primary">Add new category</Button>
          </p>
          <BootstrapTable data={this.state.categories} hover={true} selectRow={selectRowProp} condensed={true} pagination={true} search={true}>
              <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>
                No
              </TableHeaderColumn>
              <TableHeaderColumn dataField="name">
                Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="edit" dataFormat={editIconFormatter}>
                Action
              </TableHeaderColumn>
          </BootstrapTable>
          <CategoryFormModal showModal={this.state.showModal} close={this.close.bind(this)} category={this.state.currentCategory} />
        </Panel>
      </div>
    );
  }
};
