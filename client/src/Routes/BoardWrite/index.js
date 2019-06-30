import BoardWriteContainer from "./BoardWriteContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { boardUpload, uploadImage, deleteImage,boardUpdate, boardDelete } from "../../reducers/board";
const mapStateToProps = state => ({
  imagePaths: state.board.imagePaths,
  title: state.board.title,
  markdownContent: state.board.markdownContent
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ boardUpload, uploadImage, deleteImage, boardUpdate, boardDelete }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardWriteContainer);
