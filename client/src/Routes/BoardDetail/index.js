import BoardDetailContainer from "./BoardDetailContainer";
import { connect } from "react-redux";
import { getBoardDetail, boardDelete, boardUpdate, cleanBoardDetail, updateForm } from "../../reducers/board";
import { bindActionCreators } from "redux";
const mapStateToProps = state => ({
  boardResult: state.board.boardResult,
  isDelete: state.board.isDelete,
  isUpdate: state.board.isUpdate,
  loading: state.board.loading,
  me: state.user.me
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBoardDetail, boardDelete, boardUpdate, cleanBoardDetail, updateForm }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetailContainer);
