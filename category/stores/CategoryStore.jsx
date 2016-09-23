import BaseStore from '../../common/stores/BaseStore';
import CategoryConstant from '../constants/CategoryConstant';
import _ from "lodash";
import CategoryModel from '../models/CategoryModel';

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
        this._categories.push(action.data);

        // Trigger an event
        this.emitChange();
        break;
      case CategoryConstant.ACTION_SELECT_CATEGORY:
        var data=action.data;
        var theCategory = this.categories.find(function (category){
            return category.id === data;
        });

        this._currentCategory = theCategory;

        // Trigger an event
        this.emitChange();
        break;
      default:
        break;
    }
  }

}

export default new CategoryStore();
