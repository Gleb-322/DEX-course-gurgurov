// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
function camelize(str) {
    const arr = str.split('-')
    return arr.map((item, index) => {
        if (index === 0) {
            return item
        } else {
            return item[0].toUpperCase() + item.slice(1)
        }
    }).join('')
}

console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

