import BaseModel from '../../common/models/BaseModel';

export default class CategoryModel extends BaseModel {
  constructor(name) {
    super();
    this.name = name;
  }
}
