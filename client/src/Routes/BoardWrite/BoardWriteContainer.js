import React, { Component } from 'react';
import BoardWritePresenter from './BoardWritePresenter';

class BoardWriteContainer extends Component {
    constructor(props){
        super(props);
        this.imageInput = React.createRef();
    }

    state = {
        title: '',
        content: '',
        images: null,
        isUpdate: false,
    }

    componentDidMount() {
        const id = this.props.location.pathname.split("/")[3];
        if(id) {
            this.props.getBoardDetail(id);
            if(this.props.boardResult) {
                this.setState({
                    title: this.props.boardResult.title,
                    content: this.props.boardResult.content,
                    isUpdate: true
                });
            }
        }
    }

    componentWillUnmount() {
        this.props.cleanBoardDetail();
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

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

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content,
            fileUrl: this.props.imagePaths
        }
        this.props.boardUpload(data);
    }
    render(){
        const { imagePaths } = this.props;
        const { title, content,isUpdate } = this.state;
        const {handleChange, handleSubmit } = this;
        return (
            <BoardWritePresenter
                title={title}
                content={content}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                onClickImageUpload={this.onClickImageUpload}
                imageInput={this.imageInput}
                onChangeImages={this.onChangeImages}
                imagePaths={imagePaths}
                onClickImageDelete={this.onClickImageDelete}
                isUpdate={isUpdate}
            />
        );
    }
}
export default BoardWriteContainer;