export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  const fOldPrice = cartData.filter(e=>e.oldPrice)
  fOldPrice.forEach((elem) => {
    elem['discount'] = elem.oldPrice - elem.price
    if (elem['discount'] <= 0) {delete elem['discount']}
  })
  cartData.forEach(item => delete item.oldPrice)
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  const obj = cartItem.find(item => item.name === "Пицца с анчоусами")
  const objIndex = cartItem.findIndex(item => item.name === 'Пицца с анчоусами')
  obj.addedIngredients[0].count++
  const copy = {...obj}
  return [...cartItem.slice(0, objIndex), copy, ...cartItem.slice(objIndex + 1)];
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  let sumPizza = 0, sumWater = 0, sumOther = 0, countPizza = 0, countWater = 0, countOther = 0 
  cartData.forEach(elem => {
    if(elem.type === 'pizza') {
      sumPizza += elem.price * elem.count
      countPizza += elem.count
    }
    if(elem.type === 'water') {
      sumWater += elem.price * elem.count
      countWater += elem.count
    }
    if(elem.type === 'other') {
      sumOther += elem.price * elem.count
      countOther += elem.count
    }
  })
  let totalSum = sumWater + sumPizza + sumOther,
      totalCount = countWater + countPizza + countOther
  return {
    total: { count: totalCount, sum:  totalSum},
    water: { count: countWater, sum:  sumWater},
    pizza: { count: countPizza, sum:  sumPizza},
    other: { count: countOther, sum:  sumOther}
  };
};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  return date === '' ? cartData : cartData.filter(e=>e.date.split('T')[0] === date);
};
  
export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  let uId = 1000
  return date === '' ? cartData : cartData.filter(e=>e.date.split('T')[0] === date).forEach(item => {
    let copy = {...item}
    copy.date = new Date().toISOString()
    copy.id = uId++
    cartData.unshift(copy)
  });
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  cartData.forEach(elem => {
    if(elem.id === item.id) {elem.count++}
  })
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  let totalSum = 0, totalS = false, totalWaterPrice = 0, totalPizzaPrice = 0, totalOthersPrice = 0
  cartData.forEach((item) => {
    totalSum += item.price * item.count
    if (totalSum > 1000) {return totalS = true} 
  });
  cartData.forEach(obj => {
    if(obj.type === 'water') {totalWaterPrice += obj.price * obj.count}
    if(obj.type === 'pizza') {totalPizzaPrice += obj.price * obj.count}
    if(obj.type === 'other') {totalOthersPrice += obj.price * obj.count}
  })
  return {
    total: totalS,
    oneBigPosition: totalWaterPrice > 500 || totalPizzaPrice > 500  || totalOthersPrice > 500 ? true : false,
    notDiscounted: cartData.filter(e=> e.discount).length === 0 ? true : false
  };
};
