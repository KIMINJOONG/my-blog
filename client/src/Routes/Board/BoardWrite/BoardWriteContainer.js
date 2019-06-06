import React, { Component } from "react";
import BoardWritePresenter from "./BoardWritePresenter";
import { boardApi } from "../../../Api";

class BoardWriteContainer extends Component {
  state = {
    title: "",
    description: ""
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitForm = async e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description
    };
    await boardApi.upload(data);
  };
  render() {
    const { title, description } = this.state;
    return (
      <BoardWritePresenter
        title={title}
        description={description}
        onChangeInput={this.onChangeInput}
        onSubmitForm={this.onSubmitForm}
      />
    );
  }
}

export default BoardWriteContainer;
