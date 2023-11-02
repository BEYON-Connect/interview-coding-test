import { SubtitleContainer } from "../../../components/content.styled";
import { TaskItem } from "../../../types/tasks";
import { CreateTaskDialog } from "./create-task-dialog";

type TaskTableProps = {
  tasks: TaskItem[];
  title: string;
  showCreateButton?: boolean;
};

export const TaskTable = ({
  tasks,
  title,
  showCreateButton,
}: TaskTableProps) => {
  return (
    <div>
      <SubtitleContainer>
        <h2>{title}</h2>
        {showCreateButton && <CreateTaskDialog />}
      </SubtitleContainer>
      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.deadline.toLocaleString()}</td>
                <td>{task.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
