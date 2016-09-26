import request from 'reqwest';
import when from 'when';
import cookie from 'react-cookie';
import ArtistConstant from '../constants/ArtistConstant';

class ArtistService {
  getArtists(success) {
    return when(request({
      url: ArtistConstant.LIST_ARTISTS_URL,
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

export default new ArtistService()
