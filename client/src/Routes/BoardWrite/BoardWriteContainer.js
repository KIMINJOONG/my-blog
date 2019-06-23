import React, { Component } from "react";
import BoardWritePresenter from "./BoardWritePresenter";

class BoardWriteContainer extends Component {
  constructor(props){
    super(props);
    this.imageInput = React.createRef();

  }
  state = {
    title: "",
    description: ""
  };


  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeImages = e => {
    e.preventDefault();
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      console.log('11111',imageFormData);
      imageFormData.append('image', f);
      console.log('22222', imageFormData);
    });
    const data = {
      imageFormData
    }
    this.props.uploadImage(data);
  };

  onClickImageUpload = (e) => {
    e.preventDefault();
    this.imageInput.current.click();
  }

  onSubmitForm = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description
    };
    this.props.boardUpload(data);
  };
  render() {
    const { title, description } = this.state;
    return (
      <BoardWritePresenter
        title={title}
        description={description}
        onChangeInput={this.onChangeInput}
        onSubmitForm={this.onSubmitForm}
        onClickImageUpload={this.onClickImageUpload}
        imageInput={this.imageInput}
        onChangeImages={this.onChangeImages}
      />
    );
  }
}

export default BoardWriteContainer;
