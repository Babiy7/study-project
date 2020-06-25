// console.log(document.documentElement) html
// console.log(document.body.childNodes[1]);
// const fisrtElement = document.body.firstElementChild;
// const lastElement = document.body.firstElementChild;
// const nextSiblingElement = document.querySelector('.title').nextElementSibling;
// const previousSiblingElement = document.querySelector('.title').previousElementSibling;

// Scripts

// async - починає в фоновому режимі загружати script і зразу виконувати його не чекаючи
// завантаження сторінки
// defer - починає в фоновому режимі загружати script і чекає коли завантажиться сторінка
// DOMContentLoaded - браузер загрузив сторінку але зовнішні елементи такі як стилі, картинки
// можуть ще догружатись
// onload - браузер загрузив все включаючи стилі і картинки.

// ClassList
//
// add, remove, toggle, contains

//
//
// mobile events
//
//

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

export default function context() {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('box touchstart');
  });

  box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log('box touchmove');
  });

  box.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('box touchend');
  });

  box.addEventListener('touchenter', (e) => {
    e.preventDefault();
    console.log('box touchenter');
  });
}


//
//
// Elements
//
//

// const wrapper = document.getElementsByClassName('wrapper')[0];

// const width = wrapper.clientWidth;
// const height = wrapper.clientHeight;

// const { offsetWidth } = wrapper;
// const { offsetHeight } = wrapper;

// const { scrollWidth } = wrapper;
// const { scrollHeight } = wrapper;

// getBoundingClientRect - розташування елемента
// getComputedStyle
