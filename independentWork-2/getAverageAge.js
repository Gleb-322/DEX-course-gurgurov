// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
/* ... ваш код ... */
function getAverageAge(users) {
    let fullAge = users.reduce((sum , b) => sum + b.age , 0) 
    
    return fullAge / users.length
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28