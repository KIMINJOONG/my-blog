import React, { Component } from "react";
import BoardPresenter from "./BoardPresenter";

class BoardContainer extends Component {
  state = {
    listFormCode: false
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
    const { boardsList, loading } = this.props;
    return (
      <BoardPresenter
        boardsResult={boardsList}
        loading={loading}
        listFormCode={listFormCode}
        changeListForm={this.changeListForm}
      />
    );
  }
}

export default BoardContainer;
