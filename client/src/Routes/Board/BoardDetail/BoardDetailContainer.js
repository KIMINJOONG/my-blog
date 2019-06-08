import React, { Component } from "react";
import BoardDetailPresenter from "./BoardDetailPresenter";
import { Redirect } from "react-router-dom";

class BoardEtailContainer extends Component {
  state = {
    isUpdateForm: false,
    title: this.props.boardResult ? this.props.boardResult.title : "",
    description: this.props.boardResult
      ? this.props.boardResult.description
      : ""
  };
  componentDidMount() {
    const id = this.props.location.pathname.split("/")[3];
    this.props.getBoardDetail(id);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.boardResult === this.props.boardResult;
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loadUpdateForm = () => {
    this.setState({
      isUpdateForm: !this.state.isUpdateForm
    });
  };

  cancelUpdateForm = () => {
    this.setState({
      isUpdateForm: false
    });
  };

  deleteFn = () => {
    const id = this.props.location.pathname.split("/")[3];
    this.props.boardDelete(id);
  };

  updateFn = e => {
    e.preventDefault();
    const id = this.props.location.pathname.split("/")[3];
    const { title, description } = this.state;
    const data = {
      title,
      description,
      id
    };
    this.props.boardUpdate(data);
  };
  render() {
    const { isUpdateForm, title, description } = this.state;
    const { boardResult, isDelete } = this.props;
    const { updateFn } = this;
    if (isDelete) {
      return <Redirect to="/" />;
    } else {
      return (
        <BoardDetailPresenter
          boardResult={boardResult}
          deleteFn={this.deleteFn}
          loadUpdateForm={this.loadUpdateForm}
          isUpdateForm={isUpdateForm}
          cancelUpdateForm={this.cancelUpdateForm}
          onChangeInput={this.onChangeInput}
          title={title}
          description={description}
          updateFn={updateFn}
        />
      );
    }
  }
}

export default BoardEtailContainer;
