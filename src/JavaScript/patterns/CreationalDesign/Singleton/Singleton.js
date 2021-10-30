class DataBase {
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

console.log(DataBase.prototype);

const mongo = new DataBase('Mongo');
const sql = new DataBase('SQL');

console.log(mongo.prototype);
console.log(sql.prototype);

// console.log(mongo.getData());
// console.log(sql.getData());

function Singletone() {
  const { instance } = Singletone;

  if (instance) return instance;

  Singletone.instance = this;
}

const singletone1 = new Singletone();
const singletone2 = new Singletone();

console.log(Singletone);

console.log(singletone1 === singletone2);
