import React, { useState } from "react";
import TodoTemplate from "../../Component/TO/Components/TodoTemplate";
import TodoInsert from "../../Component/TO/Components/TodoInsert";
import TodoList from "../../Component/TO/Components/TodoList";

export default () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초",
      checked: true
    },
    {
      id: 2,
      text: "리액트의 스타일링",
      checked: true
    },
    {
      id: 3,
      text: "리액트 관리 앱",
      checked: true
    }
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};
