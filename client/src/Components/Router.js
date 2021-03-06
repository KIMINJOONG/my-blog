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
import store from "../store";
import { Provider } from "react-redux";
import UserJoin from "../Routes/UserJoin";
import AdminHome from "../Routes/AdminHome";
import UserLogout from "../Routes/UserLogout";
import BoardDetail from "../Routes/Board/BoardDetail";

export default () => (
  <Provider store={store}>
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/board" exact component={Board} />
          <Route path="/board/write" exact component={BoardWrite} />
          <Route path="/board/update/:id" exact component={BoardWrite} />
          <Route path="/board/:id" exact component={BoardDetail} />
          <Route path="/admin/join" exact component={UserJoin} />
          <Route path="/admin" exact component={AdminHome} />
          <Route path="/admin/logout" exact component={UserLogout} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  </Provider>
);
