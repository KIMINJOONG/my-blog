import BoardWriteContainer from './BoardWriteContainer';
import { connect } from "react-redux";
import { boardUpload, uploadImage, deleteImage } from '../../reducers/board';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    imagePaths: state.board.imagePaths
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ boardUpload, uploadImage, deleteImage }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardWriteContainer);