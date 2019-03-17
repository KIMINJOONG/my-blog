import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section"

const Container = styled.div`

`;

const BoardPresenter = ({handleSubmit}) => (
    <Container>
        <form name="boardForm" action="boardServer/upload" method="post">
            <span>제목 : </span><input type="text" name="title" />
            <span>내용 : </span><textarea name="content" />
            <input type="submit" value="등록" onClick={handleSubmit}/>
        </form>
    </Container>
);

export default BoardPresenter;