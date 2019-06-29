import React from 'react';
import styled from 'styled-components';
import MarkdownRender from '../../Components/editor/MarkDownRender';

const EditorPreviewContainer = styled.div`
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
    font-size: 1.2rem;

`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #BDBDBD;
`;


const EditorPreview = ({ markdown, title }) => (
  <EditorPreviewContainer>
    <Title>{title}</Title>
    <MarkdownRender markdown={markdown} />
  </EditorPreviewContainer>
);

export default EditorPreview;