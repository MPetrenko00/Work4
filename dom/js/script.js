//DOM
//Изменение документа

//Содержимое  элемента innerHTML

//Получаем обьект
const textElement = document.querySelector('.lesson__text');

//Получаем содержимое обьекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//Дописываем содержимое обьекта
textElement.innerHTML =
`<p>${textElementContent}</p><p>Героям Слава!</p>`;

console.log(textElement.innerHTML);