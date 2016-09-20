import AppDispatcher from '../../common/dispatchers/AppDispatcher.js';
import CategoryConstant from '../constants/CategoryConstant';

export default {

  getCategories: () => {
    let data = [{"id": 1, "name": "Pop"}, {"id": 2, "name": "J-Pop"}, {"id": 3, "name": "K-Pop"}];

    AppDispatcher.dispatch({
      actionType: CategoryConstant.ACTION_LIST_CATEGORIES,
      data: data
    });
  },
  
}
