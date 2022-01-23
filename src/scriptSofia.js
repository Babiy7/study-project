let NumberOfFilms;

function start() {
  NumberOfFilms = +prompt('How many movies did you watch?', '');

  while (
    NumberOfFilms === '' ||
    NumberOfFilms == null ||
    NumberOfFilms === isNaN(NumberOfFilms)
  ) {
    NumberOfFilms = +prompt('How many movies did you watch?', '');
  }
}

const personalMovieDB = {
  count: NumberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt('One of movies you watched');
let b = prompt('How much would you rate this movie?');
const c = prompt('One of movies you watched');
const d = prompt('How much would you rate this movie?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
  a = prompt('One of movies you watched');
  b = prompt('How much would you rate this movie?');

  if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

function rememberMovie() {}

if (personalMovieDB.count < 10) {
  console.log('Why that title?');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('classic');
} else if (personalMovieDB.count >= 30) {
  console.log('wow');
} else {
  console.log('error');
}

console.log(personalMovieDB);
