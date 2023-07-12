import { useQuery } from "react-query";
import { taskManagerService } from "../../../services/taskManagerService";
import { Spinner } from "../../../components/content.styled";
import { TaskItem } from "../../../types/tasks";
import { useEffect, useState } from "react";
import { TaskTable } from "./task-table";

export const TaskManagerScreen = () => {
  const [tasks, setTasks] = useState<{ open: TaskItem[]; closed: TaskItem[] }>({
    open: [],
    closed: [],
  });

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      return await taskManagerService.listTasks();
    },
  });

  useEffect(() => {
    if (data) {
      setTasks({
        open: data.filter((task) => !task.IsCompleted),
        closed: data.filter((task) => task.IsCompleted),
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TaskTable tasks={tasks.open} title="Open Tasks" showCreateButton />
          {tasks.closed.length > 0 && (
            <TaskTable tasks={tasks.closed} title="Closed Tasks" />
          )}
        </>
      )}
    </>
  );
};
