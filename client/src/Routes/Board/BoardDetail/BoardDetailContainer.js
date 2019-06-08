import React, { Component } from "react";
import BoardDetailPresenter from "./BoardDetailPresenter";
import { Redirect } from "react-router-dom";

class BoardEtailContainer extends Component {
  componentDidMount() {
    console.log("isDelete", this.props);
    if (this.props.isDelete === true) {
      this.props.history.push("/");
    }
    const id = this.props.location.pathname.split("/")[3];
    this.props.getBoardDetail(id);
  }

  deleteFn = () => {
    const id = this.props.location.pathname.split("/")[3];
    this.props.boardDelete(id);
  };
  render() {
    const { boardResult, isDelete } = this.props;
    if (isDelete) {
      return <Redirect to="/" />;
    } else {
      return (
        <BoardDetailPresenter
          boardResult={boardResult}
          deleteFn={this.deleteFn}
        />
      );
    }
  }
}

export default BoardEtailContainer;
