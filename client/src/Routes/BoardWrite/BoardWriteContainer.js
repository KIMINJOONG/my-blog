import React, { Component } from "react";
import BoardWritePresenter from "./BoardWritePresenter";

class BoardWriteContainer extends Component {
  constructor(props){
    super(props);
    this.imageInput = React.createRef();
  }
  state = {
    description: "",
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
      imageFormData.append('image', f);
    });
    this.props.uploadImage(imageFormData);
  };

  onClickImageUpload = (e) => {
    e.preventDefault();
    this.imageInput.current.click();
  }

  onClickImageDelete = (index) => () => {
    this.props.deleteImage(index);
  }

  onSubmitForm = e => {
    e.preventDefault();
    const data = {
      title: this.props.title,
      description: this.state.description,
      fileUrl: this.props.imagePaths,
      markdownContent: this.props.markdownContent
    };
    this.props.boardUpload(data);
  };


  updateFn = e => {
    e.preventDefault();
    const id = this.props.id
    const { description } = this.state;
    const data = {
      title: this.props.title,
      description,
      markdownContent: this.props.markdownContent,
      id
    };
    this.props.boardUpdate(data);
  };

  render() {
    const { imagePaths,title } = this.props;
    const { description } = this.state;
    return (
      <>
        <BoardWritePresenter
          title={title}
          description={description}
          onChangeInput={this.onChangeInput}
          onSubmitForm={this.onSubmitForm}
          onClickImageUpload={this.onClickImageUpload}
          imageInput={this.imageInput}
          onChangeImages={this.onChangeImages}
          imagePaths={imagePaths}
          onClickImageDelete={this.onClickImageDelete}
          updateFn={this.updateFn}
        />
      </>
    );
  }
}

export default BoardWriteContainer;
