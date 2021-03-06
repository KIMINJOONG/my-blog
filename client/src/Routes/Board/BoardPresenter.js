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
import Search from '../../Components/Search';

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
  onSearchTextChange,
  onSubmitSearch
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
          <Search 
            onSearchTextChange={onSearchTextChange}
            onSubmitSearch={onSubmitSearch} 
          />
          {cookie.load("token") && <BoardWrite to="/board/write">글쓰기</BoardWrite>}
          <button onClick={() => changeListForm(1)}>갤러리 형식</button>
          <button onClick={() => changeListForm(2)}>리스트 형식</button>
        </ListHeader>
        {boardsResult && boardsResult.length > 0 ? (
          <Section listFormCode={listFormCode ? listFormCode : '0' }>
            {boardsResult.map((result, index) =>
              listFormCode === 1 ? (
                <Boards
                  key={index}
                  title={result.title}
                  id={result._id}
                  createdAt={result.createdAt}
                  images={result.images}
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
        ) : (
          <div>
            <span>검색 결과가 존재하지 않습니다.</span>
          </div>
        )}
      </Container>
    )}
  </>
);

BoardPresenter.propTypes = {
  boardsResult: Proptypes.array
};
export default BoardPresenter;
