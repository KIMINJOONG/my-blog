import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const ButtonContainer = styled.div`
    text-align: center;
`;

const BoardDetailPresenter = ({ boardResult, id, handleDelete }) => (
    boardResult && 
    <div>
        <Header>
            <h1>{boardResult.title}</h1>
        </Header>
        <Date>{boardResult.createdAt}</Date>
        <p>{boardResult.content}</p>
        <ButtonContainer>
            <Link to={`/board/update/${id}`}>수정</Link>
            <button onClick={() => handleDelete(id)}>삭제</button>
        </ButtonContainer>
    </div>
);

export default BoardDetailPresenter;
