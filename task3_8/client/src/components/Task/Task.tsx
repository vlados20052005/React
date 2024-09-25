// src/components/Task.tsx
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, updateTodo } from "../../api/todoApi";
import { TaskProps } from "./Task.types";
import approve from "../../assets/approve.png"
import edit from "../../assets/pencil.png"
import rubish from "../../assets/rubish.png"
import "../../App.scss"

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const queryClient = useQueryClient();

  // Mutation for deleting a task
  const deleteMutation = useMutation(() => deleteTodo(task.id), {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });

  // Mutation for updating a task
  const updateMutation = useMutation(
    (updatedTask: { title: string; completed: boolean }) =>
      updateTodo(task.id, updatedTask),
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleToggleCompleted = () => {
    updateMutation.mutate({ title: task.title, completed: !task.completed });
  };

  const handleUpdateTitle = () => {
    if (newTitle.trim()) {
      updateMutation.mutate({ title: newTitle, completed: task.completed });
      setIsEditing(false);
    }
  };

  return (
    <div className={`task ${task.completed ? "cross-out" : "not-crossed-out"}`}>
      <input
        type="checkbox"
        className="checked"
        checked={task.completed}
        onChange={handleToggleCompleted}
      />
      <div className="block">
        <div className="line"></div>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleUpdateTitle}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUpdateTitle();
            }}
            className="editInput"
          />
        ) : (
          <div className="item">{task.title}</div>
        )}
      </div>
      <div className="signs">
        {isEditing ? (
          <img
            src={approve}
            alt="approve"
            className="approve"
            onClick={handleUpdateTitle}
          />
        ) : (
          <>
            <img
              src={edit}
              alt="edit"
              className="pencil"
              onClick={() => setIsEditing(true)}
            />
            <img
              src={rubish}
              alt="delete"
              className="rubish"
              onClick={handleDelete}
            />
          </>
        )}
      </div>
    </div>
  );
};
