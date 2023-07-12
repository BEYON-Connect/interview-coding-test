import { TaskItem } from "../../../types/tasks";
import { CreateTaskDialog } from "./create-task-dialog";
import { TaskTableTitle } from "./task-table.styled";

type TaskTableProps = {
  tasks: TaskItem[];
  title: string;
  showCreateButton?: boolean;
};

// Component that displays tasks in a table
export const TaskTable = ({
  tasks,
  title,
  showCreateButton,
}: TaskTableProps) => {
  return (
    <>
      <TaskTableTitle>
        <h2>{title}</h2>
        {showCreateButton && <CreateTaskDialog />}
      </TaskTableTitle>
      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.Id}>
                <td>{task.Id}</td>
                <td>{task.Title}</td>
                <td>{task.Deadline.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
