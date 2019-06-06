import React, { Component } from "react";
import BoardPresenter from "./BoardPresenter";

class BoardContainer extends Component {
  componentDidMount() {
    this.props.getBoardAction();
  }
  render() {
    const { boardsList } = this.props;
    return <BoardPresenter boardsResult={boardsList} />;
  }
}

export default BoardContainer;
