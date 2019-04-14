import React, { Component } from "react";
import BoardPresenter from "./BoardPresenter";
import { boardApi } from "../../Api";

class BoardContainer extends Component {
  state = {
    boardsResult: null,
    error: null,
    loading: null
  };
  async componentDidMount() {
    let boardsResult, error;
    try {
      ({ data: boardsResult } = await boardApi.getList());
    } catch {
      error = "Cant find boards";
    } finally {
      this.setState({
        loading: false,
        boardsResult,
        error
      });
    }
  }

  getBoardList = async () => {};

  render() {
    const { boardsResult } = this.state;
    return <BoardPresenter boardsResult={boardsResult} />;
  }
}

export default BoardContainer;
