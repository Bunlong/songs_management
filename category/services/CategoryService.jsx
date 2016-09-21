import request from 'reqwest';
import when from 'when';
import cookie from 'react-cookie';
import CategoryConstant from '../constants/CategoryConstant';

class CategoryService {
  getCategories(success) {
    return when(request({
      url: CategoryConstant.LIST_CATEGORIES_URL,
      method: 'GET',
      crossOrigin: true,
      type: 'json',
      headers: {
        'X-CSRFToken': cookie.load('csrftoken'),
        'Content-Type': 'application/json'
      }
    })).then(function(response) {
      success(response);
    });
  }
  
}

export default new CategoryService()
