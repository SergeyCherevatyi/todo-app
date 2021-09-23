import React from "react";

export interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
  onClick?: () => void;
}

const Todo = ({ id, completed, text }: Partial<ITodo>) => {
  return (
    <>
      <input type="checkbox" checked={completed} />
      <span> {text} </span>
    </>
  );
};

export default Todo;
