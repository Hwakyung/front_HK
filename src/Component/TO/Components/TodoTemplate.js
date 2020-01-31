import React from "react";
import styled from "styled-components";

export const Template = styled.div`
  background-color: greenyellow;
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

export const app_title = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: white;
`;
const TodoTemplate = ({ children }) => {
  return (
    <Template>
      <app_title>일정 관리</app_title>
      <Content>{children}</Content>
    </Template>
  );
};

export default TodoTemplate;
