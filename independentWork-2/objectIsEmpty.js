// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let schedule = {};
/* ... ваш код ... */
function isEmpty(obj) {
    if ("8:30" in obj) {
        return false
    } else {
        return true
    }
}


console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false