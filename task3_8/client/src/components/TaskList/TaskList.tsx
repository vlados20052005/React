// src/components/TaskList.tsx
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchTodos, createTodo } from "../../api/todoApi"; // Прибрані 'deleteTodo' та 'updateTodo'
import { Task } from "../Task/Task";
import { TaskType } from "./TaskList.types";
import rubish from '../../assets/rubish.png'
import plus from '../../assets/plus.png'
import "../../App.scss"

export const TaskList = () => {
  const queryClient = useQueryClient();
  const [newTask, setNewTask] = useState("");

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery<TaskType[]>("todos", fetchTodos);

  const createMutation = useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  const handleCreateTask = () => {
    if (newTask.trim()) {
      createMutation.mutate({ title: newTask, completed: false });
      setNewTask("");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;

  return (
    <div className="main">
      <h1>To do list</h1>
      <div className="enter-task">
        <input
          type="text"
          className="input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Type here to add a task..."
        />
        <div className="btn" onClick={handleCreateTask}>
          <img src={plus} alt="plus" className="plus" />
          <span className="add">Add</span>
        </div>
      </div>

      <div className="tasks">
        {todos?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>

      <div className="clear-btn">
        <img src={rubish} alt="Clear all" className="rubish-btn" />
        <span>Clear all tasks</span>
      </div>
    </div>
  );
};
