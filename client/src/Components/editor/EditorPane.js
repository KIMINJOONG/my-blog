import React, {Component} from 'react';
import styled from 'styled-components';
import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const EditorPaneContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

`;

const TitleInput = styled.input`
    background: #A6A6A6;
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 0.5rem;
    font-weight: 600;

`;

const CodeEditor = styled.div`
    flex: 1;
    background: #4C4C4C;
    display: flex;
    flex-direction: column;
    .CodeMirror {
      font-size: 1rem;
      flex: 1;
      font-family: 'D2 Coding'
    }
`;

class EditorPane extends Component {
    editor = null;
    codeMirror = null;
    cursor = null;

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    });
    this.codeMirror.on('change', this.handleChangeMarkdown);
  }

  componentDidMount() {
    this.initializeEditor();
  }

  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;

    onChangeInput({ name, value });
  }

  handleChangeMarkdown = (body) => {
    const { onChangeInput } = this.props;

    this.cursor = body.getCursor();
    onChangeInput({ name: 'markdown', value: body.getValue() });
  }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.markdown !== this.props.markdown) {
        const { codeMirror, cursor } = this;

        if (!codeMirror) return;
        codeMirror.setValue(this.props.markdown);

        if (!cursor) return;
        codeMirror.setCursor(cursor);
        }
    }
    render() {
        const { title } = this.props;
        const { handleChange } = this;

      return (
        <EditorPaneContainer>
          <TitleInput placeholder="제목 입력" name="title" value={title} onChange={handleChange} />
          <CodeEditor ref={ref => this.editor=ref}></CodeEditor>
        </EditorPaneContainer>
      );
    }
  }
  
  export default EditorPane;