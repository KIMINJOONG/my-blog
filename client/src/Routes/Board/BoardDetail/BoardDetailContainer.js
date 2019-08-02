import React, { Component } from 'react';
import BoardDetailPresenter from './BoardDetailPresenter'

class BoardDetailContainer extends Component {
      componentDidMount() {
        const id = this.props.location.pathname.split("/")[2];
        this.props.getBoardDetail(id);
      }

      handleDelete = (id) => {
        this.props.boardDelete(id);
      }
    render(){
        const id = this.props.location.pathname.split("/")[2];
        const { boardResult } = this.props;
        return(
            <BoardDetailPresenter 
                boardResult={ boardResult }
                handleDelete={ this.handleDelete }
                id={id}
            />
        );
    }
};

export default BoardDetailContainer;