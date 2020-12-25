"use strict";

let display = document.getElementById('display');
let result = '';

/*-------Buttons of numbers-------*/

function ShowOne() {
	display.textContent = display.textContent + 1; 
}

function ShowTwo() {
	display.textContent = display.textContent + 2;
}

function ShowThree() {
	display.textContent = display.textContent + 3;
}

function ShowFour() {
	display.textContent = display.textContent + 4;
}

function ShowFive() {
	display.textContent = display.textContent + 5;
}

function ShowSix() {
	display.textContent = display.textContent + 6;
}

function ShowSeven() {
	display.textContent = display.textContent + 7;
}
function ShowEiht() {
	display.textContent = display.textContent + 8;
}

function ShowNine() {
	display.textContent = display.textContent + 9;
}

function ShowZero() {
	display.textContent = display.textContent + 0;
}

/*--------- Operatotrs -------*/

function numPlus() {
	display.textContent = display.textContent + '+';
}
function numMinus() {
	display.textContent = display.textContent + '-';
}
function numMulti() {
	display.textContent = display.textContent + '*';
}
function numDivis() {
	display.textContent = display.textContent + '/';
}
function showResult() {
	result = eval(display.textContent);
	display.textContent = result;
}

function clr() {
	display.textContent = '';
}
