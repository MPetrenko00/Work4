//Кол-во прокпучених пикселей

/*const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;
        
console.log(windowScrollTop);
console.log(windowScrollLeft);*/

const block = document.querySelector('.lesson__block');

block.scrollTop = 50;

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;


console.log(elementClientWidth);
console.log(elementClientHeight);
console.log(elementScrollLeft);
console.log(elementScrollTop);
