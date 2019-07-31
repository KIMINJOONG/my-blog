import React, { Component } from 'react';
import BoardDetailPresenter from './BoardDetailPresenter'

class BoardDetailContainer extends Component {
      componentDidMount() {
        const id = this.props.location.pathname.split("/")[3];
        this.props.getBoardDetail(id);
      }
    render(){
        const { boardResult } = this.props;
        return(
            <BoardDetailPresenter 
                boardResult={ boardResult }
            />
        );
    }
};

export default BoardDetailContainer;