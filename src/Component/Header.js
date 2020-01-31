import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  background-color: black;
  font-size: 20px;
  height: 10vh;
  padding-left: 30%;
  padding-right: 30%;
  align-items: center;
  justify-content: space-evenly;
`;

export default function() {
  return (
    <Header>
      <Link to="/">Home</Link>
      <Link to="/SM">SM</Link>
      <Link to="/TO">TO</Link>
      <Link to="/HK">HK</Link>
    </Header>
  );
}
