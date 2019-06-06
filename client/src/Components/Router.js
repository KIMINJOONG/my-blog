import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Routes/Home";
import Board from "../Routes/Board";
import BoardWrite from "../Routes/Board/BoardWrite";
import BoardDetail from "../Routes/Board/BoardDetail";
import store from "../store";
import { Provider } from "react-redux";

export default () => (
  <Provider store={store}>
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/board" exact component={Board} />
          <Route path="/board/write" exact component={BoardWrite} />
          <Route path="/board/detail/:id" exact component={BoardDetail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  </Provider>
);
