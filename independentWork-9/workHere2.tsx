import { createStore, combineReducers } from "redux";
// Создать редюсер с экшонами "departments/add" и "departments/delete"
interface IDepartment extends String {}
interface IEmploee {
  name: string;
  department: IDepartment;
}

interface IAction {
  type: string;
  payload: string;
}
interface IinititalState {
  departments: string[];
  emploees: IEmploee[];
}
const inititalState: IinititalState = {
  departments: [],
  emploees: []
};
const departmentsAdd: IAction = {
  type: "departments/add",
  payload: "Ivan"
};

const departmentsDelete: IAction = {
  type: "departments/delete",
  payload: "Ivan"
};
const reducerDepartments = (
  state = inititalState.departments,
  action: IAction
) => {
  switch (action.type) {
    case "departments/add":
      return [...state, action.payload];
    case "departments/delete":
      return [state.filter((el) => el !== action.payload)];

    default:
      return state;
  }
};
// Создать редюсер с экшонами "emloees/add" и "emploees/delete"
const emploeesAdd: IActionEmloees = {
  type: "emloees/add",
  payload: {
    name: "Ivan",
    department: "Mobile"
  }
};
interface IActionEmloees {
  type: string;
  payload: IEmploee;
}

const emploeesDelete: IActionEmloees = {
  type: "emploees/delete",
  payload: {
    name: "Ivan",
    department: "Mobile"
  }
};
const reducerEmploees = (
  state = inititalState.emploees,
  action: IActionEmloees
) => {
  switch (action.type) {
    case "emloees/add":
      return [...state, action.payload];
    case "emploees/delete":
      return [state.filter((el) => el.name !== action.payload.name)];
    default:
      return state;
  }
};

// Создать рут редюсер
const rootReducer = combineReducers({
  departments: reducerDepartments,
  emploees: reducerEmploees
});

// создать стор
const store = createStore(rootReducer);
console.log(store.getState());

// вызвать каждый экшон
store.dispatch(departmentsAdd);
store.dispatch(departmentsDelete);
store.dispatch(emploeesAdd);
store.dispatch(emploeesDelete);

// законсолить изменения стейта
console.log(store.getState());
