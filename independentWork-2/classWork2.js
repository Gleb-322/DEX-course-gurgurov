// const workerExample = {
//   name: "Igor",
//   age: 34,
//   address: {
//     street: "Lenin",
//     house: 23,
//     apartments: 16
//   },
//   userBonuses: {
//     2019: 700,
//     2020: 750,
//     2021: 100
//   },
//   wage: 500,
//   hobby: ["chess", "basketball"]
// };

// TODO: Отсортировать пользователей по уровню зп
// Вывод: отсортированные зп через запятую
export const getSortWage = (data) => {
    return data
      .map((item) => item.wage)
      .sort((a, b) => a - b)
      .join(" ");
  };
  
  // TODO: Вывести зп всех пользователей
  // Число (сумма всех зп)
  export const getWageSum = (data) => {
    return data.reduce((sum, current) => sum + current.wage, 0);
  };
  
  export const getWomenName = (data) => {
    return data.find((item) => item.name.slice(-1) === "a").name;
  };
  
  // TODO: Вывести самого молодого и самого старшего пользователя
  // Вывод: "Самого младшего пользователя зовут {...} и ему ${age}.
  // Самого старшего пользователя зовут {...} и ему ${age}."
  export const getMinMaxUserAge = (data) => {
    const arr = data.map((item) => item.age).sort((a, b) => a - b);
    const small = data.find((item) => item.age === arr[0]).name;
    const high = data.find((item) => item.age === arr[arr.length - 1]).name;
    return `Самого младшего пользователя зовут ${small} и ему(ей) ${arr.slice(0,1)}.
    Самого старшего пользователя зовут ${high} и ему(ей) ${arr.slice(-1)}.`;
  };
  
  // TODO: Вывести кол-во пользователей, играющих в баскетбол
  // Элемент выглядит как "basketball"
  // Вывод: "В баскетбол играют {число} пользователей"
  export const getBasketPlayers = (data) => {
    return `В баскетбол играют ${
      data.filter((e) => e.hobby.indexOf("basketball") !== -1).length
    } пользователей`;
  };
  
  //TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
  // {street: "8 March"}
  // Вывод: "По адресу {...} живут пользователи {...}"
  export const getUsersAddress = (data) => {
    const arr = data.filter((e) => parseInt(e.address.street, 10));
    const mapAddress = arr.map((e) => e.address.street);
    const mapUsers = arr.map((e) => e.name);
    return `По адресу ${mapAddress.join(", ")} живут пользователи ${mapUsers.join(", ")}`;
  };
  
//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
export const getDoubleUserBonuses = (data) => {
    const fBonus = data.map((e) => e.userBonuses);
    const doubleBonus = [];
    for (let obj of fBonus) {
      const reduceValueObj = Object.values(obj).reduce((a, b) => a + b);
      doubleBonus.push(reduceValueObj * 2);
    }
    const fUsers = data.map((e) => e.name);
    return `Пользователи ${fUsers.join(", ")} получат соответственно ${doubleBonus.join(", ")} бонусов`;
  };
  