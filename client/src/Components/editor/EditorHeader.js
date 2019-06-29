import React from 'react';
import styled from 'styled-components';

const EditorHeaderContainer = styled.div`
    background: #0099FF;
    height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
`;

const Back = styled.div`

`;

const Submit = styled.div`
    margin-left: auto;
`;

const Button = styled.button`
`;

const EditorHeader = ({ onBack, onSubmit }) => {
    return (
      <EditorHeaderContainer>
        <Back>
          <Button onClick={onBack}>뒤로가기</Button>
        </Back>
        <Submit>
          <Button onClick={onSubmit}>저장하기</Button>
        </Submit>
      </EditorHeaderContainer>
    );
  };
  
  export default EditorHeader;