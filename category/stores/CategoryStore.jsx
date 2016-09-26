import BaseStore from '../../common/stores/BaseStore';
import CategoryConstant from '../constants/CategoryConstant';
import CategoryModel from '../models/CategoryModel';
import _ from "lodash";

class CategoryStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._categories = new Array();
    this._currentCategory = new CategoryModel();
  }

  get categories() {
    return this._categories;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case CategoryConstant.ACTION_LIST_CATEGORIES:
        this._categories = action.data;

        // Trigger an event
        this.emitChange();
        break;
      case CategoryConstant.ACTION_SAVE_CATEGORY:
        var data = action.data,
            exist = false,
            index = 0;

        for(var i=0; i < this._categories.length; i++) {
          if(this._categories[i].id == data.id) {
            exist = true;
            index = i;
            break;
          }
        }

        if(exist) {
          this._categories[index] = data;
        } else {
          this._categories.push(data);
        }

        // Trigger an event
        this.emitChange();
        break;
      case CategoryConstant.ACTION_SELECT_CATEGORY:
        var data = action.data;
        var theCategory = this.categories.find(function (category){
            return category.id === data;
        });

        this._currentCategory = theCategory;

        // Trigger an event
        this.emitChange();
        break;
      case CategoryConstant.ACTION_DELETE_CATEGORY:
        var data = action.data,
            index = 0;

        for(var i=0; i < this._categories.length; i++) {
          if(this._categories[i].id == data.id) {
            index = i;
            break;
          }
        }

        this._categories.splice(index, 1);

        // Trigger an event
        this.emitChange();
        break;
      default:
        break;
    }
  }

}

export default new CategoryStore();
