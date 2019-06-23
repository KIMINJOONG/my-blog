import BoardWriteContainer from "./BoardWriteContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { boardUpload, uploadImage } from "../../reducers/board";
const mapStateToProps = state => ({
  title: state.btitle,
  description: state.board.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ boardUpload, uploadImage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardWriteContainer);
