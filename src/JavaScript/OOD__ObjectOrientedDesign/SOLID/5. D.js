// Dependency Inversion Principle

class Fetch {
  request(url) {
    return Promise.resolve(`${url} data from fetch`);
  }
};

class LocalStorage {
  get(key) {
    return `${key} data from local storage`;
  }
};

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet(url) {
    return this.fetch.request(url);
  }
}

class LocalStorageClient {  
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(client) {
    // Тепер Database ні відкого не залежить, тому що ми зробили абстракцію
    //
    // this.localStorage = new LocalStorage();
    // this.fetch = new Fetch(); 
    this.client = client;
  }

  getData(url) {
    // Це не правильно тому що нам потрібно модифікувати клас Database залежно до класу який стоїть на нижньому рівні. Тому нам потрібно створити між ними абстракцію. 
    //
    // return this.fetch.request();
    // return this.localStorage.get();
    
    return this.client.clientGet(url);
  }
}

const dbWithLocalStorage = new Database(new LocalStorageClient());
const dbWithFetch = new Database(new FetchClient());

console.log(dbWithLocalStorage.getData('name') );
console.log(dbWithFetch.getData('https://vk.com/users'));
