export class DataBase {
  constructor(data) {
    if (DataBase.exists) {
      return DataBase.instance;
    }

    DataBase.instance = this;
    DataBase.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
