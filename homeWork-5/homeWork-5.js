import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return compareText(str)
  .then((str) => {
    return {str, result: true}
  })
  .catch((error) => error.message)
};
// // TODO: вторая использует try и catch
// // TODO: Если ответ положительный вывести в консоль: "Success: ..."
// // TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  try {
    const res = await getData(str)
    if (!res.result) {throw new Error(res)}
    return console.log(`Success: ${str}`)

  } catch(error) {
    console.log(`Error: ${error.message}`)
  }
};
processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
const getResponse = async (str) => {
  return await compareText(str)
  .then((str) => {
    console.log(`${str} :)`)
    return str
  })
  .then((str) => {
    if (str.length < 20) {console.log(`${str}${')'.repeat(20 - str.length)}`)}
  })
  .catch((error) => {
    console.log(`${error.message} :(`)
    throw new Error(error.message)
  })
  .catch((error) => {
    if (error.message.length < 20) {console.log(`${error.message}${'('.repeat(20 - error.message.length)}`)}
  })
};

getResponse("короткий текст");
getResponse("Длинный текстттт");

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ошибка')
    } else {
      return console.log(await response.json());
    }
  } catch(error) {
    return console.log(error.message);
  }
  
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
