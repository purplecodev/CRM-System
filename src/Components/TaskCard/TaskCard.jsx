import "./TaskCard.css";
import { useState } from "react";

import { editTask } from "../../api/https";

import CheckBox from "../CheckBox/CheckBox";
import EditTask from "../EditTask/EditTask";
import DeleteTask from "../DeleteTask/DeleteTask";

export default function TaskCard({
  id,
  title,
  isDone,
  fetchTasks,
  fetchCountTasks,
}) {
  const [taskData, setTaskData] = useState({
    id: id,
    title: title,
    isDone: isDone,
  });

  const [isEdit, setIsEdit] = useState(false);
  function handleEditBtnClick() {
    setIsEdit((isEdit) => !isEdit);
  }

  function handleChange(changedTitle) {
    setTaskData((prevTaskData) => {
      return {
        ...prevTaskData,
        title: changedTitle,
      };
    });
  }

  async function handleEditSubmit() {
    setIsEdit((isEdit) => !isEdit);
    try {
      await editTask(taskData.id, taskData.isDone, taskData.title);
      await fetchTasks();
      await fetchCountTasks();
    } catch (error) {
      alert(`Ошибка: ${error.message || "Не удалось обновить задачу"}`);
    }
  }

  return (
    <div className="task-card">
      <article className="left-side">
        <CheckBox
          task={taskData}
          fetchTasks={fetchTasks}
          fetchCountTasks={fetchCountTasks}
        />
        {!isEdit && <p>{taskData.title}</p>}
        {isEdit && (
          <textarea
            rows={5}
            defaultValue={taskData.title}
            onChange={(event) => handleChange(event.target.value)}
          ></textarea>
        )}
      </article>

      <article className="right-side">
        {
          <EditTask
            onSelectEdit={handleEditBtnClick}
            onSubmitEdit={handleEditSubmit}
            isEdit={isEdit}
          />
        }
        {!isEdit && (
          <DeleteTask
            task={taskData}
            fetchTasks={fetchTasks}
            fetchCountTasks={fetchCountTasks}
          />
        )}
      </article>
    </div>
  );
}
