import { config } from "../config";
import { TaskItem } from "../types/tasks";

const listTasks = async (): Promise<TaskItem[]> => {
  const response = await fetch(`${config.backend.apiUrl}/tasks`);

  const data = await response.json();

  return data.map(
    (task) =>
      ({
        id: task.Id,
        title: task.Title,
        deadline: new Date(task.Deadline),
        description: task.Description,
        isCompleted: task.IsCompleted,
      } as TaskItem)
  );
};

export const taskManagerService = {
  listTasks,
};
