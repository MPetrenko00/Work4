/*let userInfo = {
    name: "Maria",
    age: 19,
    "like JS" : true
}

console.log(userInfo);

userInfo.age = 20;

console.log(userInfo);*/

let userInfo = {
    name:"Dasha",
    age: 20,
    address: {
        city:"Uzhhorod",
        street:"Freedom",
    },
    showInfo(){
        console.log('${this.name},${this.age} років. Адрес: м.${this.address.city}, вул.${this.address.street}');
    }
}
userInfo.showInfo();