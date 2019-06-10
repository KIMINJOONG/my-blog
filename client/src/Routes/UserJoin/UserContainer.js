import React, { Component } from "react";
import UserPresenter from "./UserPresenter";

export default class UserContainer extends Component {
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
    this.props.userJoin(data);
  };
  render() {
    const { onChangeInput, onSubmitForm } = this;
    return (
      <UserPresenter
        onChangeInput={onChangeInput}
        onSubmitForm={onSubmitForm}
      />
    );
  }
}
