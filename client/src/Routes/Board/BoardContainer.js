import React, {Component } from "react";
import BoardPresenter from "./BoardPresenter";
import { boardApi } from "../../Api";

class BoardContainer extends Component {
    state = {
        boardsResult: null,
        error: null,
        loading: null
    }
    async componentDidMount (){
        let boardsResult, error;
        try {
            ({data : boardsResult} = await boardApi.getList());
        }catch {
            error= "Cant find boards";
        }finally {
            this.setState({
                loading: false,
                boardsResult,
                error
            })
        }
        
    }

    getBoardList = async() => {

    }

    handleSubmit = async() => {
        const boardForm = document.boardForm;

        await boardApi.upload();
    }
    render() {
        const {handleSubmit} = this;
        const { boardsResult } = this.state;
        console.log(boardsResult);
        return <BoardPresenter handleSubmit={handleSubmit}/>
    }
}

export default BoardContainer;