import React, { Component } from 'react';
import BoardWritePresenter from './BoardWritePresenter';



class BoardWriteContainer extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content
        }
    }
    render(){
        const { title, content } = this.state;
        const {handleChange, handleSubmit } = this;
        return (
            <BoardWritePresenter
                title={title}
                content={content} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        );
    }
}
export default BoardWriteContainer;