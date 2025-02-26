import "./TaskStatuses.css";
import { taskCounterByStatus } from "../../api/https.js";
import { useState, useEffect } from "react";

export default function TaskStatuses({
  onSelect,
  selectedTasks,
  fetchCountTasks,
  isFetching,
  countTasks,
  error,
}) {
  useEffect(() => {
    fetchCountTasks();
  }, []);
  return (
    <menu id="task-statuses">
      <li>
        <button
          onClick={() => onSelect("all")}
          className={selectedTasks === "all" ? "active" : ""}
        >
          Все ({!isFetching || error ? countTasks.all : "..."})
        </button>
      </li>
      <li>
        <button
          onClick={() => onSelect("inWork")}
          className={selectedTasks === "inWork" ? "active" : ""}
        >
          В работе ({!isFetching || error ? countTasks.inWork : "..."})
        </button>
      </li>
      <li>
        <button
          onClick={() => onSelect("completed")}
          className={selectedTasks === "completed" ? "active" : ""}
        >
          Сделано ({!isFetching || error ? countTasks.completed : "..."})
        </button>
      </li>
    </menu>
  );
}
