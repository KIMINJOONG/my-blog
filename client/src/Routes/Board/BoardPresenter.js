import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Boards from "../../Components/Boards";
import Section from "../../Components/Section";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import BoardsList from "../../Components/BoardsList";
import cookie from "react-cookies";

const Container = styled.div``;
const BoardWrite = styled(Link)`
  cursor: pointer;
`;
const ListHeader = styled.div`
  text-align: right;
`;

const BoardPresenter = ({
  boardsResult,
  loading,
  listFormCode,
  changeListForm,
}) => (
  <>
    <Helmet>
      <title>게시판 | kohubi's blog</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <ListHeader>
          {cookie.load("token") && <BoardWrite to="/board/write">글쓰기</BoardWrite>}
          <button onClick={() => changeListForm(1)}>갤러리 형식</button>
          <button onClick={() => changeListForm(2)}>리스트 형식</button>
        </ListHeader>
        {boardsResult && (
          <Section listFormCode={listFormCode}>
            {boardsResult.map((result, index) =>
              listFormCode === 1 ? (
                <Boards
                  key={index}
                  title={result.title}
                  id={result._id}
                  createdAt={result.createdAt}
                />
              ) : (
                <BoardsList
                  key={index}
                  title={result.title}
                  id={result._id}
                  createdAt={result.createdAt}
                />
              )
            )}
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
