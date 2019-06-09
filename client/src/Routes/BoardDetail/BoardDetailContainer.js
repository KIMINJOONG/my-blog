import React, { Component } from "react";
import BoardDetailPresenter from "./BoardDetailPresenter";
import { Redirect } from "react-router-dom";

class BoardEtailContainer extends Component {
  state = {
    isUpdateForm: false,
    title: "",
    description: ""
  };
  componentDidMount() {
    const id = this.props.location.pathname.split("/")[3];
    this.props.getBoardDetail(id);
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loadUpdateForm = () => {
    this.setState({
      title: this.props.boardResult.title,
      description: this.props.boardResult.description,
      isUpdateForm: true
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
    const { boardResult, isDelete, isUpdate, loading } = this.props;
    console.log(loading);
    const { updateFn } = this;
    if (isDelete || isUpdate) {
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
          loading={loading}
        />
      );
    }
  }
}

export default BoardEtailContainer;
