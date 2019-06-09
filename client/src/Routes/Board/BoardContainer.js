import React, { Component } from "react";
import BoardPresenter from "./BoardPresenter";

class BoardContainer extends Component {
  componentDidMount() {
    this.props.getBoardAction();
  }
  render() {
    const { boardsList, loading } = this.props;
    return <BoardPresenter boardsResult={boardsList} loading={loading} />;
  }
}

export default BoardContainer;
