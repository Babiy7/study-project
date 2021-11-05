// Liskov Substitution Principle

class Person {
  // access() {
  //   console.log('allowed');
  // }
}

class Member extends Person {
  access() {
    console.log('allowed');
  }
}

class Guest extends Person {

  writeReview() {

  }
}

class Frontend extends Person {
  canCreateFrontend() {

  }
}

class Backend extends Person {
  canCreateBackend() {

  }
}

class PersonFromDifferentCompany extends Person {
  // Ми тут порушуємо цей принцип, тому що цьому класу не потрібно цього методу,
  // щоб вирішити це потрібно добавите ще абстракції
  //
  // access() {
  //   throw new Error('Not alloved');
  // }
}

function openSecretDoor(person) {
  person.access();
}

openSecretDoor(new Backend());
openSecretDoor(new Frontend());
openSecretDoor(new PersonFromDifferentCompany());

console.log('Guest: ', new Guest());
