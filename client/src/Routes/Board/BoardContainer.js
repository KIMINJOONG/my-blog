import React, {Component } from "react";
import BoardPresenter from "./BoardPresenter";
import { boardApi } from "../../Api";

class BoardContainer extends Component {
    state = {
        boards: []
    }
    async componentDidMount (){
        const request = await boardApi.getList();
        const result = request.data;
        console.log(result);
    }

    getBoardList = async() => {

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