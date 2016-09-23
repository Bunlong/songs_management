import AppDispatcher from '../../common/dispatchers/AppDispatcher.js';
import CategoryConstant from '../constants/CategoryConstant';
import CategoryService from  '../services/CategoryService';

export default {

  getCategories: () => {
    return  CategoryService.getCategories(function(response) {
              if(response.status == 200) {
                AppDispatcher.dispatch({
                  actionType: CategoryConstant.ACTION_LIST_CATEGORIES,
                  data: response.data
                });
              }
            });
  },

  save: (data) => {
    return  CategoryService.save(data, function(response) {
              if(response.status == 200) {
                AppDispatcher.dispatch({
                  actionType: CategoryConstant.ACTION_SAVE_CATEGORY,
                  data: response.data
                });
              }
            });
  },

  selectCategory:(data) => {
    AppDispatcher.dispatch({
      actionType: CategoryConstant.ACTION_SELECT_CATEGORY,
      data: data
    });
  },

}
