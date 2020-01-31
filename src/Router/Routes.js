import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Headers/Home";
import SM from "./Headers/SM";
import TO from "./Headers/TO";
import HK from "./Headers/HK";
import MissingPage from "./Headers/MissingPage";

const Content = styled.div`
  background-color: yellow;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SM" component={SM} />
        <Route path="/TO" component={TO} />
        <Route path="/HK" component={HK} />
        <Route component={MissingPage} />
      </Switch>
    </Content>
  );
}

export default App;
