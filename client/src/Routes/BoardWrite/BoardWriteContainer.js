import React, { Component } from "react";
import BoardWritePresenter from "./BoardWritePresenter";

class BoardWriteContainer extends Component {
  constructor(props){
    super(props);
    this.imageInput = React.createRef();
  }

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

  render() {
    const { imagePaths } = this.props;
    return (
      <>
        <BoardWritePresenter
          onChangeInput={this.onChangeInput}
          onSubmitForm={this.onSubmitForm}
          onClickImageUpload={this.onClickImageUpload}
          imageInput={this.imageInput}
          onChangeImages={this.onChangeImages}
          imagePaths={imagePaths}
        />
      </>
    );
  }
}

export default BoardWriteContainer;
