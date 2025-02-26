export async function viewTasks(tasksStatus) {
  const response = await fetch(
    `https://easydev.club/api/v1/todos?filter=${tasksStatus}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Не удалось получить задачи.");
  }
  const resData = await response.json();
  return resData.data;
}

export async function taskCounterByStatus() {
  const response = await fetch("https://easydev.club/api/v1/todos?filter=all", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Не удалось получить задачи.");
  }
  const resData = await response.json();
  return resData.info;
}

export async function editTask(id, status, title) {
  const response = await fetch(`https://easydev.club/api/v1/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      isDone: status,
      title: title,
    }),
  });
  if (!response.ok) {
    throw new Error("Не удалось обновить задачу.");
  }
}

export async function deleteTask(id) {
  const response = await fetch(`https://easydev.club/api/v1/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Не удалось удалить задачу.");
  }
}
