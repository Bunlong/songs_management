import AppDispatcher from '../../common/dispatchers/AppDispatcher.js';
import ArtistConstant from '../constants/ArtistConstant';
import ArtistService from  '../services/ArtistService';

export default {

  getArtists: () => {
    return  ArtistService.getArtists(function(response) {
              if(response.status == 200) {
                AppDispatcher.dispatch({
                  actionType: ArtistConstant.ACTION_LIST_ARTISTS,
                  data: response.data
                });
              }
            });
  },
  
}
