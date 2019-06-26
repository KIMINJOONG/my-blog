import BoardWriteContainer from "./BoardWriteContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { boardUpload, uploadImage } from "../../reducers/board";
const mapStateToProps = state => ({
  imagePaths: state.board.imagePaths
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ boardUpload, uploadImage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardWriteContainer);
