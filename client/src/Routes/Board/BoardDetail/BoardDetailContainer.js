import React, { Component } from "react";
import BoardDetailPresenter from "./BoardDetailPresenter";

class BoardEtailContainer extends Component {
  componentDidMount() {
    const id = this.props.location.pathname.split("/")[3];
    this.props.getBoardDetail(id);
  }
  render() {
    const { boardResult } = this.props;
    return <BoardDetailPresenter boardResult={boardResult} />;
  }
}

export default BoardEtailContainer;
