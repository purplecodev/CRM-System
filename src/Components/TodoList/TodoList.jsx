import AddTask from "../AddTask/AddTask";
import TaskContainer from "../TaskContainer/TaskContainer";
import TaskStatuses from "../TaskStatuses/TaskStatuses";
import { useState } from "react";
import { taskCounterByStatus } from "../../api/https";

export default function TodoList() {
  const [selectedTasks, setSelectedTasks] = useState("All");
  const [isFetching, setIsFetching] = useState(false);
  const [countTasks, setCountTasks] = useState({});
  const [errorCountTasks, setErrorCountTasks] = useState();
  function handleSelectTasks(selectedButton) {
    setSelectedTasks(selectedButton);
  }
  async function fetchCountTasks() {
    try {
      setIsFetching(true);
      const count = await taskCounterByStatus();
      setCountTasks({
        all: count.all,
        inWork: count.inWork,
        completed: count.completed,
      });
      setIsFetching(false);
    } catch (error) {
      setErrorCountTasks(error);
    }
  }
  return (
    <>
      <header id="header-main">
        <h1>Список задач</h1>
      </header>
      <main>
        <div id="todo-list-board">
          <AddTask />
          <TaskStatuses
            onSelect={handleSelectTasks}
            selectedTasks={selectedTasks}
            fetchCountTasks={fetchCountTasks}
            isFetching={isFetching}
            countTasks={countTasks}
            error={errorCountTasks}
          />
          <TaskContainer
            selectedTasks={selectedTasks}
            fetchCountTasks={fetchCountTasks}
          />
        </div>
      </main>
    </>
  );
}
