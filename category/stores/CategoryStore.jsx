import BaseStore from '../../common/stores/BaseStore';
import CategoryConstant from '../constants/CategoryConstant';
import _ from "lodash";

class CategoryStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._categories = new Array();
  }

  get categories() {
    return this._categories;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case CategoryConstant.ACTION_LIST_CATEGORIES:
        alert("alert store");
        this._categories = action.data;
        this.emitChange();
        break;
      default:
        break;
    };
  }

}

export default new CategoryStore();
