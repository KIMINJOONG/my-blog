import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Boards from "../../Components/Boards";
import Section from "../../Components/Section";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const BoardWrite = styled(Link)`
  cursor: pointer;
`;

const BoardPresenter = ({ boardsResult, loading }) => (
  <>
    <Helmet>
      <title>게시판 | kohubi's blog</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <BoardWrite to="/board/write">글쓰기</BoardWrite>
        {boardsResult && (
          <Section>
            {boardsResult.map((result, index) => (
              <Boards key={index} title={result.title} id={result._id} />
            ))}
          </Section>
        )}
      </Container>
    )}
  </>
);

BoardPresenter.propTypes = {
  boardsResult: Proptypes.array
};
export default BoardPresenter;
