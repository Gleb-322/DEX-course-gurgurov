import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}

//TODO: сделать компонент TodoCard
const TodoCard = ({ deleteCallback, todo, id }: TodoCardProps) => {
  return (
    <li className="todoCard">
      <div>{todo.text}</div>
      <div onClick={() => deleteCallback(id)} className="delete_todo">
        &times;
      </div>
    </li>
  );
};

export { TodoCard };
