// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
let {name, years: age, isAdmin = false } = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false