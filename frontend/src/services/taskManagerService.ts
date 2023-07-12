import { config } from "../config";
import { TaskItem } from "../types/tasks";

const listTasks = async () => {
  const response = await fetch(`${config.backend.apiUrl}/tasks`);

  const data = await response.json();

  return data as TaskItem[];
};

export const taskManagerService = {
  listTasks,
};
