import BoardDetailContainer from "./BoardDetailContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBoardDetail, boardDelete } from "../../../reducers/board";

const mapStateToProps = state => ({
  boardResult: state.board.boardResult,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBoardDetail, boardDelete }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetailContainer);
