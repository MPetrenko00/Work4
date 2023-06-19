let userInfo = {
    name: "Maria",
    age: 19,
    "like JS" : true
}

console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["like JS"];

console.log(userInfo);
