import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoList = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

export default ({ todos }) => {
  return (
    <TodoList>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </TodoList>
  );
};
