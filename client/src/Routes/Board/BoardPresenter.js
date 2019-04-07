import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Boards from "../../Components/Boards";
import Section from "../../Components/Section";
//import Section from "../../Components/Section"

const Container = styled.div``;
const Error = styled.h3``;

const BoardPresenter = ({ handleSubmit, boardsResult }) => (
  <>
    <Helmet>
      <title>게시판 | kohubi's blog</title>
    </Helmet>
    <Container>
      <form name="boardForm" action="boardServer/upload" method="post">
        <span>제목 : </span>
        <input type="text" name="title" />
        <span>내용 : </span>
        <textarea name="description" />
        <input type="submit" value="등록" onClick={handleSubmit} />
      </form>
    </Container>
    <Container>
      {boardsResult && (
        <Section>
          {boardsResult.map((result, index) => (
            <Boards key={index} title={result.title} />
          ))}
        </Section>
      )}
    </Container>
  </>
);

BoardPresenter.propTypes = {
  boardsResult: Proptypes.array
};
export default BoardPresenter;
