import React, { Component } from "react";
import BoardWritePresenter from "./BoardWritePresenter";
import EditorTemplate from "../../Components/editor/EditorTemplate";
import EditorHeader from "../../Components/editor/EditorHeader";
import EditorPane from "../../Components/editor/EditorPane";
import EditorPreview from "../../Components/editor/EditorPreview";

class BoardWriteContainer extends Component {
  constructor(props){
    super(props);
    this.imageInput = React.createRef();
  }
  state = {
    title: "",
    description: "",
    tt: '',
    markdown: '',
  };

  handleChangeInput = ({ name, value }) => {
      if(name === 'tt'){
        this.setState({
          tt: value
        });
      } else {
        this.setState({
          markdown: value
        });
      }
        
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
      title: this.state.title,
      description: this.state.description,
      fileUrl: this.props.imagePaths
    };
    this.props.boardUpload(data);
  };
  render() {
    const { imagePaths } = this.props;
    const { title, description } = this.state;
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
        />
        <EditorTemplate 
          header={<EditorHeader />}
          editor={<EditorPane onChangeInput={this.handleChangeInput} titie={this.state.title} />}
          preview={<EditorPreview title={this.state.tt} markdown={this.state.markdown}/>}
        />
      </>
    );
  }
}

export default BoardWriteContainer;
