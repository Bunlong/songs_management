import AppDispatcher from '../../common/dispatchers/AppDispatcher.js';
import {ACTION_LIST_CATEGORIES} from '../constants/CategoryConstant';

export default {
  getCategories: (data) => {

    AppDispatcher.dispatch({
      actionType: ACTION_LIST_CATEGORIES,
      data: data
    });

    return data;
  },

  saveCategory: (data) => {
    alert("save");
  },
}
