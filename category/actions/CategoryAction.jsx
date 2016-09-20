import AppDispatcher from '../../common/dispatchers/AppDispatcher.js';
import CategoryConstant from '../constants/CategoryConstant';

export default {
  
  getCategories: (data) => {
    AppDispatcher.dispatch({
      actionType: CategoryConstant.ACTION_LIST_CATEGORIES,
      data: data
    });
  },
  
}
