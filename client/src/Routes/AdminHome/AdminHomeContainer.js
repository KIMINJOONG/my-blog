import React, { Component } from "react";
import AdminHomePresenter from "./AdminHomePresenter";

export default class extends Component {
  state = {
    id: "",
    password: ""
  };
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitForm = e => {
    e.preventDefault();
    const data = {
      id: this.state.id,
      password: this.state.password
    };
    this.props.userLogin(data);
  };
  render() {
    const { onChangeInput, onSubmitForm } = this;
      return (
        <AdminHomePresenter
          onChangeInput={onChangeInput}
          onSubmitForm={onSubmitForm}
          isLogin={this.props.isLogin}
        />
      );
  }
}
