//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, fn) => {
  let count = 0
  return (x) => {
    count++
    console.log(`${name} ${count}`)
    return () => {
      return fn(x)
   }
  }
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, fn) => {
  return (...x) => {
    console.log(`${name}: ${x.join('; ')}`)
    return () => {
      const result = fn(...x)
      console.log(result)
      return result
    }
  }
}

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry = (fn) => {
  return function f(...rest) {
    if (rest.length >= fn.length) {
      return fn.apply(this, rest);
    } else {
      return (...rest2) => {
        return f.apply(this, rest.concat(rest2));
      }
    }
  }
};