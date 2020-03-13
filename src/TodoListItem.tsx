import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </>
  );
};
