import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: #f8f8f8;
  height: 120px;
`;

const List = styled.ul``;

const Item = styled.li`
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  color: ${props => (props.current ? "#333" : "#959595")};
  float: left;
  margin-left: 30px;
  border-bottom: 3px solid ${props => (props.current ? "#333" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
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
