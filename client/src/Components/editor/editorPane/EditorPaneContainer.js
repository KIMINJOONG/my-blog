import React, { Component } from 'react';
import styled from 'styled-components';
import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const EditorPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);

  & .title {
    background: #A6A6A6;
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 0.5rem;
    font-weight: 600;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5)
    }
  }

  & .code-editor {
    flex: 1;
    background: #4C4C4C;
    display: flex;
    flex-direction: column;
    & .CodeMirror {
      font-size: 1rem;
      flex: 1;
    }
  }

`;


class EditorPaneContainer extends Component {
    editor = null;
    codeMirror = null;

    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editor, {
        mode: 'markdown',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true
        });
    }

    componentDidMount() {
        this.initializeEditor();
    }

    render() {
        return (
        <EditorPane className="editor-pane">
            <input className="title" placeholder="제목 입력" name="title" />
            <div className="code-editor" ref={ref => this.editor=ref}></div>
        </EditorPane>
        );
    }
}

export default EditorPaneContainer;