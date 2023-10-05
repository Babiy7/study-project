import SeamlessImmutable from 'seamless-immutable';
import Immutable from 'immutable';

const state = SeamlessImmutable({
  style: {
    color: {
      r: 128,
      g: 64,
      b: 32
    },
    font: {
      family: 'sans-serif',
      size: 14
    }
  },
  text: 'Example',
  bounds: {
    size: {
      width: 100,
      height: 200
    },
    position: {
      x: 300,
      y: 400
    }
  }
});

const nextState = state.setIn(['style', 'color', 'r'], 99);

// console.log(state.bounds === nextState.bounds);

const arraySeamlessImmutable = SeamlessImmutable([1, 2, 3, 4, 5, 6, 7]);
const arrayImmutable = Immutable.List([1, 2, 3, 4, 5, 6, 7]);
const arrayCore = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arrayImmutable.toJS().length; i++) {
  console.log('i', i);
}

arrayImmutable.push(8);
arrayCore.push(8);

console.log('arrayImmutable', arrayImmutable.toJS());
console.log('arrayCore', arrayCore);

console.log('delete element', arrayCore.filter((_, i) => i !== 2));

// arraySeamlessImmutable.push(8);
// console.log('arraySeamlessImmutable', arraySeamlessImmutable);
