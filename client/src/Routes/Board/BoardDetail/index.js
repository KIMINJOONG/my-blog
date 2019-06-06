import BoardDetailContainer from "./BoardDetailContainer";
import { connect } from "react-redux";
import { getBoardDetail } from "../../../reducers/board";
import { bindActionCreators } from "redux";
const mapStateToProps = state => ({
  boardResult: state.board.boardResult
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBoardDetail }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetailContainer);
