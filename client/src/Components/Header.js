import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`

`;

const List = styled.ul`

`;

const Item = styled.li`

`;

const SLink = styled(Link)``;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">home</SLink>
            </Item>
            <Item>
                <SLink to="/board">board</SLink>
            </Item>
        </List>
    </Header>
);
