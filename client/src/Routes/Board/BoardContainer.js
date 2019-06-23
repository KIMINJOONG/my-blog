import React, { Component } from "react";
import BoardPresenter from "./BoardPresenter";

class BoardContainer extends Component {
  state = {
    listFormCode: 1,
    searchTerm: ''
  };
  componentDidMount() {
    this.props.getBoardAction();
  }

  changeListForm = listFormCode => {
    this.setState({
      listFormCode
    });
  };

  onSearchTextChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  onSubmitSearch = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.searchBoard(searchTerm);
  }

  render() {
    const { listFormCode } = this.state;
    const { boardsList, loading, isLogin } = this.props;
    const { onSearchTextChange, onSubmitSearch } = this;
    return (
      <BoardPresenter
        boardsResult={boardsList}
        loading={loading}
        listFormCode={listFormCode}
        changeListForm={this.changeListForm}
        isLogin={isLogin}
        onSearchTextChange={ onSearchTextChange }
        onSubmitSearch={ onSubmitSearch }  
      />
    );
  }
}

export default BoardContainer;
