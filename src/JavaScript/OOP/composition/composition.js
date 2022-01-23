function createProgrammer(name) {
  const programmer = { name };
  return {
    ...programmer,
    ...canCode(programmer),
  };
}

function createFrontend(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canReact(programmer),
    ...canVue(programmer),
    ...canAngular(programmer),
  };
}

function createBackend(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canNodejs(programmer),
  };
}

function createFullstack(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canNodejs(programmer),
    ...canReact(programmer),
    ...canVue(programmer),
    ...canAngular(programmer),
  };
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding...`),
  };
}

function canReact({ name }) {
  return {
    react: () => console.log(`${name} is creating a react app...`),
  };
}

function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is creating a angular app...`),
  };
}

function canVue({ name }) {
  return {
    vue: () => console.log(`${name} is creating a vue app...`),
  };
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} is creating a nodejs app...`),
  };
}

const programmer = createProgrammer('Oleg');
programmer.code();

const frontend = createFrontend('Anna');
frontend.code();
frontend.react();
frontend.vue();
frontend.angular();

const backend = createBackend('Andriy');
backend.code();
backend.nodejs();

const fullstack = createFullstack('Sofia');
fullstack.code();
fullstack.react();
fullstack.nodejs();
fullstack.vue();
fullstack.angular();
