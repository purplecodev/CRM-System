import TaskCard from "../TaskCard/TaskCard";

import { useEffect } from "react";

export default function TaskContainer({
  selectedTasks,
  fetchTasks,
  shownTasks,
  isFetching,
  error,
  fetchCountTasks,
}) {
  useEffect(() => {
    fetchTasks();
  }, [selectedTasks]);

  if (!error && !isFetching && shownTasks.length === 0) {
    return <p>Задач нет</p>;
  }

  return (
    <section id="task-container">
      <ul>
        {error && <p>Ошибка: {error.message}</p>}
        {isFetching && !error && <p>Загрузка...</p>}
        {!isFetching && !error && shownTasks.length === 0 && <p>Задач нет</p>}
        {!isFetching &&
          !error &&
          shownTasks.length > 0 &&
          shownTasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskCard
                  id={task.id}
                  title={task.title}
                  isDone={task.isDone}
                  fetchTasks={fetchTasks}
                  fetchCountTasks={fetchCountTasks}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
