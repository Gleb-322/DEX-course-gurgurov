// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers1(from, to) {
    let timerId = setInterval(function() {
        console.log(from)
        if(from === to) {clearInterval(timerId)}
        from++
    }, 1000)
}
console.log(printNumbers1(1,10))

function printNumbers2(from, to) {
    setTimeout(function f() {
        console.log(from)
        if(from < to) {setTimeout(f,1000)}
        from++
    },1000)
}
console.log(printNumbers2(1,10))