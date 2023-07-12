import { useQuery } from "react-query";
import { taskManagerService } from "../../../services/taskManagerService";
import { Spinner } from "../../../components/content.styled";
import { TaskItem } from "../../../types/tasks";
import { useEffect, useState } from "react";
import { TaskTable } from "./task-table";
import { TaskContainer } from "./task-manager-screen.styled";

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
        open: data.filter((task) => !task.isCompleted),
        closed: data.filter((task) => task.isCompleted),
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <TaskContainer>
          <TaskTable tasks={tasks.open} title="Open Tasks" showCreateButton />
          {tasks.closed.length > 0 && (
            <TaskTable tasks={tasks.closed} title="Closed Tasks" />
          )}
        </TaskContainer>
      )}
    </>
  );
};
