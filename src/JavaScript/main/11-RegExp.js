// patterns

function context() {
  // console.log('ANNA'.search(reg));
  // console.log('ANNA'.match(reg).length);
  // console.log('ANNA'.replace(/n/gi, 'o'));
  // console.log('ANNA'.replace(/./gi, '*'));
  // console.log(')(Oleg is a 44 profesionall footballer and he is 232'.match(/\d\d\S/));

  const string = '03-68-BC-01-02-03 Babiy 13:A8:BC:05-72:12 Oleg  03-68-BC-01-02-03 99:68:BC:01:02:03';

  // const reg = /[a-z\d]{2}([:-])(?:[a-z\d]{2}\1){4}[a-z\d]{2}/ig;

  // const string = 'olegbabiy77@gmail.com';

  // const reg = /[a-zA-Z\d]{2}([:-])(?:[a-zA-Z\d]{2}\1){4}[a-zA-Z\d]{2}/ig;

  // console.log(string.match(reg));

  // const str = 'My name is R2D2';

  // const result = str.match(/(\w\d){2}/g);

  // console.log(Array.from(result));

  // methods String
  // split, search, match, matchAll
  // search - повертає індекс першого співпадіння, якщо не має співпадіння то повертає -1
  // match - повертає массив співпадінь по даному запиту
  // replace - приймає два аргументи регулярний вираз і другим те що потрібно замінити
  // matchAll - приймає регулярку і повертає ітеруємий об'єкт який потрібно перебрати, і як
  // результат ти отримуєш массив з кожним співпадінням

  const number = '((((()))))))';

  const result = number.match(/\(/g);
  const result2 = number.match(/\)/g);

  console.log('result', result.length);
  console.log('result2', result2.length);

  // methods RegExp
  // test, exec

  // flags

  // i коли ми хочемо знайти щось не залежно від регістру
  // g ми шукаємо глобально всі входження
  // m багатостроковість
  // s шукає перенос стрічки
  // u підтримака юнікоду і юнікодних властивостей \p{}

  // classes

  // \d шукає цифру \D
  // \w шукає букви [a-z A-Z 0-9 _] \W
  // \s шукає пробіли \S
  // . - любий символ крім \n
  // [abc] набор любий символ з даного набору
  // [^abd] винятковий набор

  // квантификатори

  // жадні
  // {n} - повторити n раз
  // {m,n} - повторити m або n раз бере завжди більшу кількість
  // ? - шукає [0,1] тобто якщо не може знайти цілу стрічку шукає частину після ?
  // * {0,}
  // + {0,}

  // ліниві
  // {m,n}? - бере завжди меншу кількість
  // *? {0}
  // +? {1}

  // якоря

  // ^ - вказує на початок тексту або стрічки якщо є флаг m
  // [^] - вказує на викючення
  // $ - вказує на кінець тексту або стрічки якщо є флаг m
  // \b - границя слова між
  // 1) ^ - \w
  // 2) \w - \W
  // 3) \W - \w
  // 4) \w - $
  // \B - шукає поміж слова

  // () - дужкова група
  // (?:) - дужкова група виключення з запамятовування
  // \N зворотна силка в шаблоні
  // (?<name>) - іменна душкова група
  // \k<name> - зворотна силка в групі

  // | - або (альтернація)
  // X(?=Y) - X, якщо за ним йде Y(позитивно випереджаюча провірка)
  // x(?!y) - знайти x заяким не слідує y(негативна провірка)
  // (?<=y)x - знайти x якщо перед x є y (позитивно ретоспективна провірка)
  // (?<!y)x - знайти x якщо перед x немає y (негативно ретоспективна провірка)
}

context();
