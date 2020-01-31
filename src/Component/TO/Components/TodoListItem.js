import React from "react";
import styled from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";

const TodoListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; /*세로중앙정렬*/
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;
const Checkbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  /* &.checked{
      svg{
          color:#22b8cf;
      }
  } */
`;
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;
const Remove = styled.div``;

export default () => {
  return (
    <TodoListItem>
      <Checkbox>
        <MdCheckBoxOutlineBlank />
        <Text>할 일</Text>
      </Checkbox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItem>
  );
};
