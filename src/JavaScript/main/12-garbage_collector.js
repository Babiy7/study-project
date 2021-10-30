let user = {
  name: 'Owen',
};

// тепер силки на обєкт немає тому garbage collector видаляє його з памяті
user = null;

function marry(man, woman) {
  man.wife = woman;
  woman.husband = woman;

  return {
    father: man,
    mother: woman,
  }
}

let man = { name: 'Jon' };
let woman = { name: 'Ann' };

const family = marry(man, woman);

delete family.father;

console.log('family', family);

// Основні алгоритми зборки:

// 1. Сборка по поколениям (Generational collection)
// Обєкти діляться на нові та старі, старі провіряються рідше ніж нові
// 2. Инкрементальная сборка (Incremental collection)
// Він працює маленькими сесіями щоб були маленькі затримки, а не одна велика затримка
// 3. Сборка в свободное время (Idle-time collection)
// Щоб збільшити продуктивність, він працює тількитоді коли не навантажений процесор
