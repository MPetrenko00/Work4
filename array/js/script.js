let arrOne = [
    "Masha",
    {
        type: "JS",
        age: 19
    },
    true,
    function(){
        console.log('Hello, I am Mariia');
    }
];

console.log(arrOne);
console.log(arrOne[0]);
console.log(arrOne[1].type);
console.log(arrOne[2]);
arrOne[3]();

//Многомерные массивы
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);
console.log(matrix[0][1]);

let arr = ['огірок','помідо','кавун',];

//indexOf
console.log(arr.indexOf('огірок'));
console.log(arr.indexOf('цибуля'));

//includes
console.log(arr.includes('огірок'));