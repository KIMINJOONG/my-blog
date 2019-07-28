import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import EditorPane from '../../Components/editor/editorPane';

const Container = styled.div`

`;



const BoardWritePresenter = ({
  onSubmitForm,
  imageInput,
  onClickImageUpload,
  onChangeImages,
  imagePaths,
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
        <EditorPane />
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
            </div>
          );
        })}
      </div>
    </Container>
  </>
);

export default BoardWritePresenter;
