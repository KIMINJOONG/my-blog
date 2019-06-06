import BoardContainer from "./BoardContainer";
import { connect } from "react-redux";
import { getBoardAction } from "../../reducers/board";
import { bindActionCreators } from "redux";
const mapStateToProps = state => ({
  boardsList: state.board.boardsList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBoardAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
