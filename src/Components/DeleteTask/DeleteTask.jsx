import { deleteTask } from "../../api/https";

export default function DeleteTask({ task, fetchTasks, fetchCountTasks }) {
  async function handleClick() {
    try {
      await deleteTask(task.id);
      await fetchTasks();
      await fetchCountTasks();
    } catch (error) {
      alert(`Ошибка: ${error.message || "Не удалось удалить задачу"}`);
    }
  }

  return (
    <button className="btn-card btn-red" onClick={handleClick}>
      <svg
        fill="#ffffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z"></path>
        </g>
      </svg>
    </button>
  );
}
