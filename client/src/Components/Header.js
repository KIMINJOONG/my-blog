import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: #f8f8f8;
  height: 55px;
`;

const List = styled.ul`
  padding: 0px;
  margin: 0 0 0 10px;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  color: ${props => (props.current ? "#333" : "#959595")};
  float: left;
  margin: 0 10px 0 0;
  border-bottom: 3px solid ${props => (props.current ? "#333" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  list-style: none;
  padding: 0px;
`;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">home</SLink>
      </Item>
      <Item current={pathname === "/board"}>
        <SLink to="/board">board</SLink>
      </Item>
    </List>
  </Header>
));
