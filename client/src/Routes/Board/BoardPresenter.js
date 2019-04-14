import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Boards from "../../Components/Boards";
import Section from "../../Components/Section";
import { Link } from "react-router-dom";

const Container = styled.div``;
const BoardWrite = styled(Link)`
  cursor: pointer;
`;

const BoardPresenter = ({ boardsResult }) => (
  <>
    <Helmet>
      <title>게시판 | kohubi's blog</title>
    </Helmet>
    <Container>
      <BoardWrite to="/board/write">글쓰기</BoardWrite>
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
