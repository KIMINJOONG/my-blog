import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div``;

const BoardWritePresenter = ({
  description,
  onChangeInput,
  onSubmitForm,
  imageInput,
  onClickImageUpload,
  onChangeImages,
  imagePaths,
  onClickImageDelete,
  updateFn,
  deleteFn
}) => (
  <>
    <Helmet>게시글 쓰기 | kohubi's blog</Helmet>
    <Container>
      <form 
        onSubmit={onSubmitForm} 
        encType="multipart/form-data"
      >
        <button 
          onClick={onClickImageUpload}>이미지 업로드</button>
        <input
          type="file"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <span>내용 : </span>
        <textarea
          name="description"
          onChange={onChangeInput}
          value={description}
        />
        <button onClick={updateFn}>수정</button>
        <button onClick={onSubmitForm}>등록</button>
      </form>
      <div>
        {imagePaths.map((v, i) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={`http://localhost:4000/${v}`}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <button onClick={onClickImageDelete(i)}>제거</button>
              </div>
            </div>
          );
        })}
        <button onClick={deleteFn}>삭제</button>
      </div>
    </Container>
  </>
);

export default BoardWritePresenter;
