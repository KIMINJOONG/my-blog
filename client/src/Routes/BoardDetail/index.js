import BoardDetailContainer from "./BoardDetailContainer";
import { connect } from "react-redux";
import { getBoardDetail, boardDelete, boardUpdate } from "../../reducers/board";
import { bindActionCreators } from "redux";
const mapStateToProps = state => ({
  boardResult: state.board.boardResult,
  isDelete: state.board.isDelete,
  isUpdate: state.board.isUpdate,
  loading: state.board.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBoardDetail, boardDelete, boardUpdate }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetailContainer);
