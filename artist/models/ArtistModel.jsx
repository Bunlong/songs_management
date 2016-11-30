import BaseModel from '../../common/models/BaseModel';

export default class ArtistModel extends BaseModel {
  constructor(name) {
    super();
    this.id = null;
    this.name = name;
  }
}
