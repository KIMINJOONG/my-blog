import BoardDetailContainer from "./BoardDetailContainer";
import { connect } from "react-redux";
import { getBoardDetail, boardDelete } from "../../../reducers/board";
import { bindActionCreators } from "redux";
const mapStateToProps = state => ({
  boardResult: state.board.boardResult,
  isDelete: state.board.isDelete
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBoardDetail, boardDelete }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetailContainer);
