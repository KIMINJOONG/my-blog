import React, {Component } from "react";
import BoardPresenter from "./BoardPresenter";
import { boardApi } from "../../Api";

class BoardContainer extends Component {
    componentDidMount(){
        this.getBoardList();
    }

    getBoardList = async() => {
        await boardApi.getList();
    }

    handleSubmit = async() => {
        const boardForm = document.boardForm;

        await boardApi.upload();
    }
    render() {
        const {handleSubmit} = this;
        return <BoardPresenter handleSubmit={handleSubmit}/>
    }
}

export default BoardContainer;