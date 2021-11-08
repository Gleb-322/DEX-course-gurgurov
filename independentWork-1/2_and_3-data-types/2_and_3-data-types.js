// 1 Number 

const number = 23
console.log(number) // 23

let n = 12 
console.log(n) // 12
n = 12.3
console.log(n) // 12.3

const sum = number + n
console.log(sum) // 35.3

console.log(1 / 0) // Infinity
console.log(- 1 / 0) // -Infinity

console.log('не число' / 23 - 5) // NaN

// 2 BigInt

const bigInt = 1234567890123456789012345678901234567890n;

// 3 String

let name = 'Gleb',
surname = "Gurgurov"

console.log (name + surname)
console.log (`${name} ${surname}`)

// 4 Boolean

const bool = false
let isTrue = 23 > 12.3
console.log(isTrue) // true
let isFalse = 23 < 12.3
console.log(isFalse) // false

// 5 Null

let myName = null

// 6 Undefined

let youName
console.log(youName) // undefined

// 7 Object

const obj = {
    name: 'Gleb',
    age: 23,
    isMarried: false,
    address: {
        city: 'Bendery',
        house: 99
    }
}

console.log(obj.name) // Gleb
console.log(obj.address.city) // Bendery

// 8 Symbol

let id1 = Symbol('id')
let id2 = Symbol('id')
console.log(id1 == id2) // false

// Преобразование типов: в строчку, в число, в true/false

const numbers = 1234
console.log(typeof numbers) // number
console.log(typeof(String(numbers))) // string


const str = "123"
console.log(typeof str) // string
console.log(typeof(Number(str))); // number

console.log('2' * '4') // 8

console.log(+str) // number

console.log(Number("  123   ")) // 123
console.log(Number("123px")) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
let undefinedData
console.log(Number(undefinedData)) // NaN

/* всегда false, все остальное true */
console.log(Boolean(null))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

console.log(typeof NaN) // number
console.log(typeof null) // object

