import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

type Task = {
  id: string;
  title: string;
  description?: string;
  priority?: string;
};

type Columns = {
  todo: Task[];
  progress: Task[];
  done: Task[];
};

export default function Board() {

  /* ---------- LOAD DATA FROM LOCAL STORAGE ---------- */

  const [columns, setColumns] = useState<Columns>(() => {
    const saved = localStorage.getItem("kanbanData");

    if (!saved) {
      return { todo: [], progress: [], done: [] };
    }

    const parsed = JSON.parse(saved);

    // ensure priority exists for old tasks
    Object.keys(parsed).forEach((col) => {
      parsed[col] = parsed[col].map((task: Task) => ({
        ...task,
        priority: task.priority || "Medium"
      }));
    });

    return parsed;
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [search, setSearch] = useState("");

  /* ---------- SAVE DATA ---------- */

  useEffect(() => {
    localStorage.setItem("kanbanData", JSON.stringify(columns));
  }, [columns]);

  /* ---------- ADD TASK ---------- */

  const addTask = () => {

    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      priority
    };

    setColumns({
      ...columns,
      todo: [...columns.todo, newTask]
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  /* ---------- DELETE TASK ---------- */

  const deleteTask = (column: keyof Columns, index: number) => {

    const updated = [...columns[column]];
    updated.splice(index, 1);

    setColumns({
      ...columns,
      [column]: updated
    });
  };

  /* ---------- EDIT TASK ---------- */

  const editTask = (column: keyof Columns, index: number) => {

    const newTitle = prompt("Edit task title");

    if (!newTitle) return;

    const updated = [...columns[column]];
    updated[index].title = newTitle;

    setColumns({
      ...columns,
      [column]: updated
    });
  };

  /* ---------- DRAG & DROP ---------- */

  const onDragEnd = (result: any) => {

    if (!result.destination) return;

    const sourceCol = result.source.droppableId as keyof Columns;
    const destCol = result.destination.droppableId as keyof Columns;

    const sourceTasks = [...columns[sourceCol]];
    const [moved] = sourceTasks.splice(result.source.index, 1);

    const destTasks = [...columns[destCol]];
    destTasks.splice(result.destination.index, 0, moved);

    setColumns({
      ...columns,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks
    });
  };

  return (

    <div>

      {/* SEARCH BAR */}

      <div style={{textAlign:"center", marginBottom:"15px"}}>
        <input
          className="task-input"
          placeholder="Search tasks..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>

      {/* ADD TASK SECTION */}

      <div className="input-container">

        <input
          className="task-input"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="task-input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="task-input"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>

      </div>

      {/* KANBAN BOARD */}

      <DragDropContext onDragEnd={onDragEnd}>

        <div className="board">

          {Object.entries(columns).map(([columnId, tasks]) => {

            const filteredTasks = tasks.filter(task =>
              task.title.toLowerCase().includes(search.toLowerCase())
            );

            return (

            <Droppable droppableId={columnId} key={columnId}>

              {(provided) => (

                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`column ${columnId}`}
                >

                  <h2>
                    {columnId.toUpperCase()} ({filteredTasks.length})
                  </h2>

                  {filteredTasks.map((task, index) => (

                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >

                      {(provided) => (

                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task-card"
                        >

                          <div className="task-title">
                            {task.title}
                          </div>

                          {task.description && (
                            <div className="task-desc">
                              {task.description}
                            </div>
                          )}

                          <div className={`priority ${(task.priority || "medium").toLowerCase()}`}>
                            {task.priority}
                          </div>

                          <div className="task-buttons">

                            <button
                              className="edit-btn"
                              onClick={() =>
                                editTask(columnId as keyof Columns, index)
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="delete-btn"
                              onClick={() =>
                                deleteTask(columnId as keyof Columns, index)
                              }
                            >
                              Delete
                            </button>

                          </div>

                        </div>

                      )}

                    </Draggable>

                  ))}

                  {provided.placeholder}

                </div>

              )}

            </Droppable>

          )})}

        </div>

      </DragDropContext>

    </div>

  );
}