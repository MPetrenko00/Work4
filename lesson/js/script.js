//Использование DOM-обьекта

/*const button = document.querySelector('.button');

button.onclick = function (){
    console.log('Клік');
}*/


const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event){
    if (event.repeat) txtSetCounter();
});

function txtSetCounter(){
    const txtCounterResult = txtItemLimit - txtItem.ariaValueMax.length;
    txtCounter.innerHTML = txtCounterResult;
}