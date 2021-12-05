import { ITodo } from "../types";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}

//TODO: сделать TodoList компонент
const TodoList = ({ deleteCallback, todos }: ITodoListProps) => {
  const items = todos.map((item, index) => {
    return (
      <TodoCard
        key={index}
        id={item.id}
        todo={item}
        deleteCallback={deleteCallback}
      />
    );
  });

  return (
    <div>
      <div>Список</div>
      <ul>{items}</ul>
    </div>
  );
};
export { TodoList };
