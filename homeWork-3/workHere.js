export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  const fOldPrice = cartData.filter(e=>e.oldPrice)
  fOldPrice.forEach((elem) => {
    elem['discount'] = elem.oldPrice - elem.price
    elem['discount'] <= 0 ? delete elem['discount'] : null
  })
  cartData.forEach(item => delete item.oldPrice)
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  const obj = cartItem.find(item => item.name === 'Пицца с анчоусами')
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
  return cartData.filter(e=>e.date === date);
};
  
export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  let uId = 1000
  cartData.filter(e=>e.date === date).forEach(item => {
    let copy = {...item}
    copy.date = new Date().toISOString()
    copy.id = uId++
    cartData.unshift(copy)
  })
  return cartData;
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
  let totalSum = 0, bigOne = false, totalS = false
  cartData.forEach((item) => {
    totalSum += item.price * item.count
    if (totalSum > 1000) {return totalS = true} 
  });
  cartData.forEach((el) => el.price * el.count  > 500 ?  bigOne = true : null);
  return {
    total: totalS,
    oneBigPosition: bigOne,
    notDiscounted: cartData.filter(e=> e.discount).length === 0 ? true : false
  };
};
