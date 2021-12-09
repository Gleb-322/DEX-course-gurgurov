import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import { fetchProjects, fetchTotos } from "./mocks/mockFetcher";
import { IProject, ITodo } from "./types";

// Реализуйте хук для получения проектов, используя
// асинхронную функцию fetchProjects. Дайте пользователю
// знать, что происходит загрузка

type loadedData<T> = {
  isLoading: boolean;
  content: T;
};

const useProjects = (): loadedData<IProject[]> => {
  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchProjects().then((content: []) => {
      setContent(content);
      setLoading(false);
    });
  }, [content]);

  return {
    isLoading,
    content
  };
};

// Реализуйте хук для получения todo проектов, используя
// асинхронную функцию fetchTotos. Дайте пользователю
// знать, что происходит загрузка. Реализуйте функцию
// удаления записи todo. Избегайте повторной загрузки
// данных — это сбросит удалённые элементы списка

type deletableLoadedTata<T> = loadedData<T> & {
  remove: (todoId: number) => void;
};

type ContentItem = {
  id: number;
  text: string;
  projectId: number;
};

const useTodos = (projectId: number | null): deletableLoadedTata<ITodo[]> => {
  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (typeof projectId === "number") {
      fetchTotos(projectId).then((content: []) => {
        setLoading(false);
        return setContent(content);
      });
    }
  }, [projectId]);

  const remove = useCallback(
    (todoId) => {
      const items = content.filter((item: ContentItem) => item.id !== todoId);
      setContent(items);
    },
    [content]
  );

  return {
    isLoading,
    content,
    remove
  };
};

// Допишите компонент фильтра. При нажатии на кнопку "поиск"
// необходимо вызвать onFilter из свойств компонента.
// Дополнительной задачей является минимизация количества
// обновлений компонента (вывод "FilterComponent render" в
// консоль должен быть минимальным)

type FilterProps = {
  onFilter: (search: string) => void;
};

const FilterComponent: FC<FilterProps> = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  useMemo(() => console.log("FilterComponent render"), []);

  return (
    <div>
      Фильтр:&nbsp;
      <input onChange={useCallback((e) => setSearch(e.target.value), [])} />
      <button onClick={useCallback(() => onFilter(search), [onFilter, search])}>
        поиск
      </button>
    </div>
  );
};

export { useProjects, useTodos, FilterComponent };
