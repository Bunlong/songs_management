import BaseStore from '../../common/stores/BaseStore';
import ArtistConstant from '../constants/ArtistConstant';
import _ from "lodash";

class ArtistStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._artists = new Array();
  }

  get artists() {
    return this._artists;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case ArtistConstant.ACTION_LIST_ARTISTS:
        this._artists = action.data;

        // Trigger an event
        this.emitChange();
        break;
      default:
        break;
    }
  }

}

export default new ArtistStore();
