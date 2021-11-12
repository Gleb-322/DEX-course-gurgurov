export const sum = (f, s) => {
    //TODO: Должны складываться только строки и числа
    // Постарайтесь сложить как можно больше пар и обойти NaN случаи
    if (isNaN(parseFloat(f)) || isNaN(parseFloat(s))) {
      if (isNaN(parseFloat(f)) && isNaN(parseFloat(s))) {
        return 0;
      }
      if (isNaN(parseFloat(f))) {
        return parseFloat(s);
      }
      if (isNaN(parseFloat(s))) {
        return parseFloat(f);
      }
    }
    return parseFloat(f) + parseFloat(s);
  };
  
  export const showPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    //TODO: Привести цену к виду: 10.00 р.
    // округлять до копеек в сторону магазина
  
    const ceilPrice = Math.ceil(discountedPrice * 10);
  
    return `${(ceilPrice / 10).toFixed(2)} р.`;
  };
  
  export const findSuccess = (bankResponse) => {
    //TODO: Проверьте что в строке есть 'Success' без учёта регистра
    const bankResponseLowerCase = bankResponse.toLowerCase();
    if (bankResponseLowerCase.includes("success")) {
      return "Yes";
    } else {
      return "No";
    }
  };
  
  export const dateToString = (date) => {
    //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
    const nowDate = new Date();
    const getNowYear = nowDate.getFullYear();
    const getNowMonth = nowDate.getMonth();
    const getNowDate = nowDate.getDate();
  
    const includeDate = new Date(Date.parse(date));
    const getIncludeDateYear = includeDate.getFullYear();
    const getIncludeDateMonth = includeDate.getMonth();
    const getIncludeDateDate = includeDate.getDate();
    // Сегодня
    if (
      getNowYear === getIncludeDateYear &&
      getNowMonth === getIncludeDateMonth &&
      getNowDate === getIncludeDateDate
    ) {
      return "Сегодня";
    }
    // Завтра
    if (
      getNowYear === getIncludeDateYear &&
      getNowMonth === getIncludeDateMonth &&
      getNowDate + 1 === getIncludeDateDate
    ) {
      return "Завтра";
    }
    // Вчера
    if (
      getNowYear === getIncludeDateYear &&
      getNowMonth === getIncludeDateMonth &&
      getNowDate - 1 === getIncludeDateDate
    ) {
      return "Вчера";
    }
    // Остальные
    return `${getIncludeDateYear}:${
      getIncludeDateMonth + 1
    }:${getIncludeDateDate}`;
  };
  
  export const sort = (data) => {
    //TODO: Отсортируйте массив строк по алфавиту
  
    const sortData = data.sort((a, b) => a.localeCompare(b));
  
    return sortData;
  };
  