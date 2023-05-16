'use strict';

//start project////////////////////////////////////////////////////////////////
// Modal window///////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////////

//Creating,Selecting and Deleting Elements/
const header = document.querySelector('.header');
const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close--cookie">Got it!</button>';
header.prepend(message);

//DeLeting the element
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  message.remove();
});
///////////////////////////////////////////

//Scrolling to bottom//////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////////

//Page Navigation//////////////////////////
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
///////////////////////////////////////////
//End project/////////////////////////////////////////////////////////////////
//
//
//
//

//
//
//
//
//Start Lectures///////////////////////////////////////////////////////////////
//Selecting Elements///////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
//const header = document.querySelector('.header');
// console.log(document.querySelector('.header')); //most used
// console.log(document.querySelectorAll('.section')); //most used
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByTagName('head'));
// console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//document.insertAdjacentHTML(); //used early in this course

// const message = document.createElement('div');
// message.classList.add('cookie-message');

//message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class="btn btn--close--cookie">Got it!</button>';

// header.prepend(message); //add it as the first child for the element
//header.append(message); //add it as the last child to the element
//header.append(message.cloneNode(true)); //copy 'message' also to the end of the 'header'
//header.before(message); //adding 'message' before the header
//header.after(message); //adding 'message' after the header

//DeLeting the element
// document.querySelector('.btn--close--cookie').addEventListener('click', () => {
//   //message.parentElement.removeChild(message); // we was using this before to remove or delete the element
//   message.remove(); //now we use this to delete or remove the element
// });

//styles
// message.style.backgroundColor = '#37383d';
// console.log(message.style.backgroundColor);

// console.log(message.style.color); //not working
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// console.log(message.style.height);

//document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attrıbutes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.id);
// console.log(logo.src); // absolute link
// console.log(logo.className);

//Non-Standard
// console.log(logo.developer); // not working
// console.log(logo.getAttribute('developer'));

// logo.setAttribute('bankist', 'website');
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

//data attribute
// console.log(logo.dataset.versionNumber);

//classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// console.log(logo.classList.contains('c'));

//Dont use
//logo.className = 'c' // it will replace all the classes by this one only
//////////////////////////////////////

//Scrolling//////////////////////////
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', e => {
//   e.preventDefault();
//   const s1Coords = section1.getBoundingClientRect();
//console.log(s1Coords);
//console.log(e.target.getBoundingClientRect());

//current scrolling
// console.log(
//   'Current horizontal and vertical scroll x/y :',
//   window.pageXOffset,
//   window.pageYOffset
// );

//as the viewport of the user
// console.log(
//   'Height/Width viewport :',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

//scrolling to section one
//   window.scrollTo(
//     s1Coords.left + window.pageXOffset,
//     s1Coords.top + window.pageYOffset
//   );
// });

//smooth scrolling
// window.scrollTo({
//   left: s1Coords.left + window.pageXOffset,
//   top: s1Coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//more modern way for scrolling
// section1.scrollIntoView({ behavior: 'smooth' });
//});
/////////////////////////////////////

//Events/////////////////////////////
// const h1 = document.querySelector('.header__title');
// const alert1 = () => alert('Hello!! you hovered on the header');

// h1.addEventListener('mouseenter', () => {
//   h1.style.color = '#666';
//   h1.addEventListener('mouseenter', alert1);
// });
// setTimeout(h1.removeEventListener('mouseenter', alert1), 3000);

//h1.onmouseenter = () => (h1.style.color = '#555');

//working with navigation
// const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //Random Number Formula
// console.log(randInt(10, 20));
// const randomColor = () =>
//   `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //stop propagation
//   //e.stopPropagation(); // not recommended
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target, e.currentTarget);
// });
/////////////////////////////////////
//End Lectures/////////////////////////////////////////////////////////////////
