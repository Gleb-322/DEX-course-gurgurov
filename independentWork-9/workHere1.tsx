// Определить тип для экшона

import { createStore } from "redux";
let initialState: IinititalState = {
  greatings: "Привет Мир"
};
interface IinititalState {
  greatings: string;
}
// создать экшены FirstAction, SecondAction, AsyncAction
const firstAction: IAction = {
  type: "FIRST_ACTION"
};
const secondAction: IAction = {
  type: "SECOND_ACTION"
};
const thirdAction: IAction = {
  type: "ASYNC_ACTION"
};
interface IAction {
  type: string;
}

// создать редьюсер, который обрабатывает экшены: первый, второй, асинхронный
const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "FIRST_ACTION":
      return {
        ...state,
        greatings: "Привет я FirstAction"
      };
    case "SECOND_ACTION":
      return {
        ...state,
        greatings: "Привет я SecondAction"
      };
    case "ASYNC_ACTION":
      return {
        ...state,
        greatings: "Привет я AsyncAction"
      };
    default:
      return state;
  }
};
// создать стор
const store = createStore(reducer);

// TODO подписаться на изменения сторы
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Вызвать каждый экшон по одному разу
store.dispatch(firstAction);
store.dispatch(secondAction);
store.dispatch(thirdAction);
// отписаться от изменений сторы

// Вызвать первый экшон ещё раз
store.dispatch(firstAction);
unsubscribe();
// Вывести в консоль текущее состояние сторы
console.log(store.getState())
