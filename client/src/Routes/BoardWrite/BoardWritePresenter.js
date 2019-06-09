import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div``;

const BoardWritePresenter = ({
  title,
  description,
  onChangeInput,
  onSubmitForm
}) => (
  <>
    <Helmet>게시글 쓰기 | kohubi's blog</Helmet>
    <Container>
      <form name="boardForm" onSubmit={onSubmitForm}>
        <span>제목 : </span>
        <input
          type="text"
          name="title"
          onChange={onChangeInput}
          value={title}
        />
        <span>내용 : </span>
        <textarea
          name="description"
          onChange={onChangeInput}
          value={description}
        />
        <button onClick={onSubmitForm}>등록</button>
      </form>
    </Container>
  </>
);

export default BoardWritePresenter;
