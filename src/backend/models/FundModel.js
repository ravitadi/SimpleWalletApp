export default class FundModel {
  constructor(type, id, data, isDefault = false) {
    this.type = type;
    this.id = id;
    this.data = data;
    this.isDefault = isDefault;
  }
}
