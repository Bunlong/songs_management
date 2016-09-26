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

  save(data, success) {
    var method = 'PUT';
    
    if(data.id == null) { method = 'POST'; }

    return when(request({
      url: CategoryConstant.SAVE_CATEGORY_URL,
      method: method,
      crossOrigin: true,
      type: 'json',
      headers: {
        'X-CSRFToken': cookie.load('csrftoken'),
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    })).then(function(response) {
      success(response);
    });
  }

  delete(data, success) {
    return when(request({
      url: CategoryConstant.SAVE_CATEGORY_URL,
      method: 'DELETE',
      crossOrigin: true,
      type: 'json',
      headers: {
        'X-CSRFToken': cookie.load('csrftoken'),
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    })).then(function(response) {
      success(response);
    });
  }  
}

export default new CategoryService()
