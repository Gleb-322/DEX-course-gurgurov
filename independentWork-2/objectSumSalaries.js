// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    if (Object.values(salaries).length === 0) {
        return 0
    }
    return Object.values(salaries).reduce((a, b) => a + b)
}

console.log(sumSalaries(salaries))
