// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// Постарайтесь сделать код как можно короче.
let user = {
    name: 'John',
    age: 30
  };
  /* Ваш код */
function count(user) {
    return Object.keys(user).length
}

 console.log( count(user) ); // 2