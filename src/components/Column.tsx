import TaskCard from "./TaskCard";

interface Props {
  title: string;
  tasks: string[];
  color: string;
  column: string;
  deleteTask: (column: string, index: number) => void;
}

export default function Column({
  title,
  tasks,
  color,
  column,
  deleteTask
}: Props) {
  return (
    <div
      style={{
        background: color,
        padding: "20px",
        width: "300px",
        minHeight: "420px",
        borderRadius: "12px"
      }}
    >
      <h3>{title}</h3>

      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onDelete={() => deleteTask(column, index)}
        />
      ))}
    </div>
  );
}