import BoardWriteContainer from './BoardWriteContainer';
import { connect } from "react-redux";
import { boardUpload, uploadImage, deleteImage, getBoardDetail, cleanBoardDetail } from '../../reducers/board';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    imagePaths: state.board.imagePaths,
    boardResult: state.board.boardResult
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getBoardDetail, boardUpload, uploadImage, deleteImage, cleanBoardDetail }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardWriteContainer);