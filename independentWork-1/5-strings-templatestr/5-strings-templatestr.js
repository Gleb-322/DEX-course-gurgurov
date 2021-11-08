// задания для строк

// задача 1 - Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Решение 
function ucFirst(str) {
    if (!str) return str
    const sliceStr = str.slice(0, 1)
    const otherStr = str.slice(1)
    const indexUp = sliceStr.toUpperCase()
    const newStr = `${indexUp}${otherStr}`
    return newStr
}
console.log(ucFirst('gleb'))

// задача 2 - Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Решение 
function checkSpam(str) {
    const lowerStr = str.toLowerCase()
    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        return true
    }
    return false
}
console.log(checkSpam('buy ViAgRA now')) // true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam('innocent rabbit')) // false

// задача 3 - Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Решение
function truncate(str, maxlength) {
    let strLength = str.length
    let newEnd = '...'
    if (strLength > maxlength) {
        const newStr = `${str.slice(0, maxlength - 1)}${newEnd}`
        return newStr
    } else {
        return str
    }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) // Вот, что мне хотело...
console.log(truncate("Всем привет!", 20)) // Всем привет!


// задача 4 - Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Решение
function extractCurrencyValue(str) {
    const arrExp = str.match(/\d/g)
    return arrExp.join('')
}
console.log(extractCurrencyValue('$12220'))




// Задание для Шаблонных строк
// 1 - Что вывется в консоль
let name = "Gleb"
let surname = "Gurgurov"

console.log( `hello ${1}` ) // ? => hello 1

console.log( `hello ${"name"}` ) // ? => hello name

console.log( `hello ${name}` ) // ? hello Gleb

// 2 - На страницу вывести свое имя и фамилию при нажатии на кнопку
const textReplace = document.querySelector('.text'),
btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    textReplace.innerHTML = `
        <h1>${name}</h1>
        <h2>${surname}</h2>
    `
})

