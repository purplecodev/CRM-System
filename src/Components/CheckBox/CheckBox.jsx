import emptyMark from "../../assets/empty-mark.png";
import checkMark from "../../assets/check-mark.png";
import { editTask } from "../../api/https";

export default function CheckBox({ task, fetchTasks, fetchCountTasks }) {
  async function handleClickEditMark(statusMark) {
    try {
      await editTask(task.id, !statusMark, task.title);
      await fetchTasks();
      await fetchCountTasks();
    } catch (error) {
      alert(`Ошибка: ${error.message || "Не удалось обновить задачу"}`);
    }
  }

  return (
    <img
      src={task.isDone ? checkMark : emptyMark}
      alt=""
      className="mark"
      onClick={() => handleClickEditMark(task.isDone)}
    />
  );
}
