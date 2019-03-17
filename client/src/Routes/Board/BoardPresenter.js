import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section"

const Container = styled.div`

`;

const BoardPresenter = ({handleSubmit}) => (
    <Container>
        <span>제목 : </span><input type="text" />
        <span>내용 : </span><textarea />
        <input type="submit" value="등록" onClick={handleSubmit}/>
    </Container>
);

export default BoardPresenter;