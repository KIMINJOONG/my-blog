import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
//import Section from "../../Components/Section"

const Container = styled.div`

`;
const Title = styled.h3`
`;


const BoardPresenter = ({handleSubmit, boardsResult}) => (
    <>
    <Container>
        <form name="boardForm" action="boardServer/upload" method="post">
            <span>제목 : </span><input type="text" name="title" />
            <span>내용 : </span><textarea name="description" />
            <input type="submit" value="등록" onClick={handleSubmit}/>
        </form>
    </Container>
    <Container>
        {boardsResult ? 
            boardsResult.map(
                result => 
                    <Title>
                        {result.title}
                    </Title>
            ) : 
                    <Title>
                        게시글을 찾을 수 없습니다.
                    </Title>
        }
    </Container>
    </>
);

BoardPresenter.propTypes = {
    boardsResult: Proptypes.array
}
export default BoardPresenter;