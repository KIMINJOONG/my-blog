import React from "react";
import Loader from "../../Components/Loader";
import styled from 'styled-components';

const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 2.8em;
  margin-bottom: 15px;
`;

const Date = styled.span`
  text-align: right;
  color: gray;
  font-size: 0.9em;
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 1.5em;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 0 5px;
`; 

const BoardDetailPresenter = ({
  boardResult,
  deleteFn,
  loadUpdateForm,
  isUpdateForm,
  cancelUpdateForm,
  onChangeInput,
  title,
  description,
  updateFn,
  loading,
  me
}) => (
  <div>
    {loading ? (
      <Loader />
    ) : isUpdateForm ? (
      <form onSubmit={updateFn}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChangeInput}
        />
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={onChangeInput}
        />
        <button onClick={updateFn}>수정</button>
        <button onClick={cancelUpdateForm}>취소</button>
      </form>
    ) : (
      boardResult && (
        <div>
          <Top>
            <Title>{boardResult.title}</Title>
            <Date>등록 날짜 : 
            {
              boardResult.createdAt  
              ? boardResult.createdAt.substring(0, 10) 
              : boardResult.createdAt
            }
            </Date>
          </Top>
          <div>
            
            {
              boardResult.images && 
              boardResult.images.map((image, index) => (
                <img key={index} src={`http://localhost:4000/${image.src}`} width="100px" alt={image.src} />
              ))
            }
          </div>
          <Description>{boardResult.description}</Description>
          {
            me && (
              <ButtonContainer>
                <Button onClick={loadUpdateForm}>수정</Button>
                <Button onClick={deleteFn}>삭제</Button>
              </ButtonContainer>
              )
          }
          
        </div>
      )
    )}
  </div>
);

export default BoardDetailPresenter;
