import { DataBase } from './SingletonClass';
import { Singletone } from './SingletoneFunction';

const mongo = new DataBase('Mongo');
const sql = new DataBase('SQL');

console.log(mongo);
console.log(sql);

console.log(mongo.getData());
console.log(sql.getData());

const singletone1 = new Singletone();
const singletone2 = new Singletone();

console.log(singletone1 === singletone2);
