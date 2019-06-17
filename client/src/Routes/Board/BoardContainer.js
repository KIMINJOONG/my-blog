import React, { Component } from "react";
import BoardPresenter from "./BoardPresenter";

class BoardContainer extends Component {
  state = {
    listFormCode: 1
  };
  componentDidMount() {
    this.props.getBoardAction();
  }

  changeListForm = listFormCode => {
    this.setState({
      listFormCode
    });
  };

  render() {
    const { listFormCode } = this.state;
    const { boardsList, loading, isLogin } = this.props;
    return (
      <BoardPresenter
        boardsResult={boardsList}
        loading={loading}
        listFormCode={listFormCode}
        changeListForm={this.changeListForm}
        isLogin={isLogin}
      />
    );
  }
}

export default BoardContainer;
