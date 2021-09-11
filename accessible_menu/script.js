const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.menu__list');

const menuButton1 = document.querySelector('#menu__button--1');
const menuList1 = document.querySelector('#menu__list--1');

const menuButton2 = document.querySelector('#menu__button--2');
const menuList2 = document.querySelector('#menu__list--2');

const menuButton3 = document.querySelector('#menu__button--3');
const menuList3 = document.querySelector('#menu__list--3');

menuButton.addEventListener('click', () => {
	let expanded = menuButton1.getAttribute('aria-expanded') === 'true';
	menuButton1.setAttribute('aria-expanded', !expanded);
	menuButton1.classList.toggle('menu__button--open');
	menuList1.classList.toggle('menu__list--open');
});

menuButton2.addEventListener('click', () => {
	let expanded = menuButton2.getAttribute('aria-expanded') === 'true';
	menuButton2.setAttribute('aria-expanded', !expanded);
	menuButton.classList.toggle('menu__button--open');
	menuList2.classList.toggle('menu__list--open');
});

menuButton3.addEventListener('click', () => {
	let expanded = menuButton3.getAttribute('aria-expanded') === 'true';
	menuButton3.setAttribute('aria-expanded', !expanded);
	menuButton3.classList.toggle('menu__button--open');
	menuList3.classList.toggle('menu__list--open');
});

window.addEventListener('click', e => {
	let targetNot = e.target;
	if (!targetNot.closest('.menu__list') && !targetNot.closest('.menu__button')) {
		menuList1.classList.remove('menu__list--open');
		menuButton1.classList.remove('menu__button--open')
		menuList2.classList.remove('menu__list--open');
		menuButton2.classList.remove('menu__button--open')
		menuList3.classList.remove('menu__list--open');
		menuButton3.classList.remove('menu__button--open')
	}
});