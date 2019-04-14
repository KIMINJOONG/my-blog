import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div``;

const BoardWritePresenter = () => (
  <>
    <Helmet>게시글 쓰기 | kohubi's blog</Helmet>
    <Container>
      <form name="boardForm" action="boardServer/upload" method="post">
        <span>제목 : </span>
        <input type="text" name="title" />
        <span>내용 : </span>
        <textarea name="description" />
        <input type="submit" value="등록" />
      </form>
    </Container>
  </>
);

export default BoardWritePresenter;
