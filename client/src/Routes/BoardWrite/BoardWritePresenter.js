import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 10px;
    & .title{
        width: 100%;
        margin-bottom: 10px;
    }

    & .content {
        width: 100%;
        height: 500px;
    }
`;
const BoardWritePresenter = ({
    title, 
    content, 
    handleChange, 
    handleSubmit,
    imageInput,
    onClickImageUpload,
    onChangeImages,
    imagePaths,
    onClickImageDelete,
    isUpdate
    }) => (
    <Container>
        <form onSubmit={handleSubmit} >
            <input className="title" type="text" name="title" value={title} onChange={handleChange} placeholder={"제목을 입력해주세요"} />
            <textarea className="content" name="content" value={content} onChange={handleChange} placeholder={"내용을 입력해주세요"}/>
            <button 
                onClick={onClickImageUpload}>
                이미지 업로드
            </button>
            <input
                type="file"
                multiple
                hidden
                ref={imageInput}
                onChange={onChangeImages}
            />
            {
              isUpdate ? (
                <button onClick={handleSubmit}>수정</button>
              ) : (
                <button onClick={handleSubmit}>등록</button>
              )
            }
            
        </form>
        <div>
          {imagePaths.map((src, i) => {
            return (
              <div key={i} style={{ display: "inline-block" }}>
                <img
                  src={`http://localhost:4000/${src}`}
                  style={{ width: "200px" }}
                  alt={i}
                />
                <div>
                  <button onClick={onClickImageDelete(i)}>제거</button>
                </div>
              </div>
            );
          })}
        </div>
    </Container>
);

export default BoardWritePresenter;