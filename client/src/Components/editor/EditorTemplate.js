import React, {Component} from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`

`;

const Panes = styled.div`
    height: calc(100vh - 4rem);
    display: flex;
    position: relative;
`;

const Pane = styled.div`
    display: flex;
    min-width: 0;
    overflow: auto;
`;

const Divide = styled.div`
    width: 1rem;
    height: 100%;
    position: absolute;
    transform: translate(-50%);
    cursor: col-resize;
    background: silver;
`;

class EditorTemplate extends Component {
    state = {
        leftRatio: 0.5
    };
    handleMouseMove = (ev) => {
        this.setState({ leftRatio: ev.clientX / window.innerWidth })
      }
    
      handleMouseUp = (ev) => {
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
      };
    
      handleDivideMouseDown = (ev) => {
        document.body.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
      }
    render() {
        const { header, editor, preview } = this.props;
        const { leftRatio } = this.state;
        const { handleDivideMouseDown } = this;
        const leftLand = { flex: leftRatio };
        const rightLand = { flex: 1 - leftRatio };
        const devideLand = { left: `${leftRatio * 100}%` };

        return (
            <EditorContainer>
                {header}
                <Panes>
                    <Pane style={leftLand}>
                        {editor}
                    </Pane>
                    <Pane style={rightLand}>
                        {preview}
                    </Pane>
                    <Divide
                        style={devideLand}
                        onMouseDown={handleDivideMouseDown}
                    />
                </Panes>
            </EditorContainer>
        );
    }
}

export default EditorTemplate;