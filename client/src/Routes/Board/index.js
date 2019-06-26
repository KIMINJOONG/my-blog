import BoardContainer from "./BoardContainer";
import { connect } from "react-redux";
import { getBoardAction, searchBoard } from "../../reducers/board";
import { bindActionCreators } from "redux";
const mapStateToProps = state => ({
  boardsList: state.board.boardsList,
  loading: state.board.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBoardAction, searchBoard }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
