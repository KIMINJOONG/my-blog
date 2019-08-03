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

const Button = styled.div`
    display: inline-block;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    border: 1px solid black;
    margin: 0 10px;
`;

const Slink = styled(Link)`
    display: inline-block;
    width: 70px;
    height: 30px;
    border: 1px solid black;
    line-height: 30px;
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
        {
            boardResult && boardResult.images && (
                <div>
                    {boardResult.images.map((image, i) => {
                        return (
                        <div key={i} style={{ display: "inline-block" }}>
                            <img
                            src={`http://localhost:4000/${image.src}`}
                            style={{ width: "200px" }}
                            alt={image.src}
                            />
                        </div>
                        );
                    })}
                </div>
            )
        }
        <ButtonContainer>
            <Slink to={`/board/update/${id}`}>수정</Slink>
            <Button onClick={() => handleDelete(id)}>삭제</Button>
        </ButtonContainer>
    </div>
);

export default BoardDetailPresenter;
