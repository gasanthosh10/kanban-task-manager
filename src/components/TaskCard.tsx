interface Props {
  task: string;
  onDelete: () => void;
}

export default function TaskCard({ task, onDelete }: Props) {
  return (
    <div
      draggable
      style={{
        background: "white",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#333",
        fontWeight: "500"
      }}
    >
      <span>{task}</span>

      <button
        onClick={onDelete}
        style={{
          background: "#e74c3c",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Delete
      </button>
    </div>
  );
}