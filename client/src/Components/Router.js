import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Routes/Home";
import Board from "../Routes/Board";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/board" component={Board} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)