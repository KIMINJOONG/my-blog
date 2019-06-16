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
import BoardWrite from "../Routes//BoardWrite";
import BoardDetail from "../Routes//BoardDetail";
import store from "../store";
import { Provider } from "react-redux";
import UserJoin from "../Routes/UserJoin";
import UserLogin from "../Routes/UserLogin";
import UserLogout from "../Routes/UserLogout"

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
          <Route path="/user/join" exact component={UserJoin} />
          <Route path="/user/login" exact component={UserLogin} />
          <Route path="/user/logout" exact component={UserLogout} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  </Provider>
);
