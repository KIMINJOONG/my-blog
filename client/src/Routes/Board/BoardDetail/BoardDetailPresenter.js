import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    border-bottom: 1px solid black;
`;

const Date = styled.div`
    text-align: right;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: gray;
`;

const BoardDetailPresenter = ({ boardResult }) => (
    boardResult && 
    <div>
        <Header>
            <h1>{boardResult.title}</h1>
        </Header>
        <Date>{boardResult.createdAt}</Date>
        <p>{boardResult.content}</p>
        
    </div>
);

export default BoardDetailPresenter;
