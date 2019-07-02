import React, { Component } from "react";
import BoardDetailPresenter from "./BoardDetailPresenter";
import EdiotrPreview from '../../Components/editor/EditorPreview';
import BoardWrite from '../BoardWrite';

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

  componentWillUnmount(){
    this.props.cleanBoardDetail();
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loadUpdateForm = () => {
    this.setState({
      description: this.props.boardResult.description,
      isUpdateForm: true
    });
    this.props.updateForm(this.props.boardResult.title, this.props.boardResult.markdownContent);
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

  
  render() {
    const { isUpdateForm, title, description } = this.state;
    const { boardResult, loading, me } = this.props;
    const { deleteFn } = this;
      return (
        <div>
        { !isUpdateForm ?
          <>
            <BoardDetailPresenter
            boardResult={boardResult}
            deleteFn={deleteFn}
            loadUpdateForm={this.loadUpdateForm}
            isUpdateForm={isUpdateForm}
            cancelUpdateForm={this.cancelUpdateForm}
            onChangeInput={this.onChangeInput}
            title={title}
            description={description}
            loading={loading}
            me={me}
          />
          <EdiotrPreview />
          </>
          :
          <BoardWrite id={this.props.location.pathname.split("/")[3]}/>
        }
          
        </div>
      );
    }
}

export default BoardEtailContainer;
