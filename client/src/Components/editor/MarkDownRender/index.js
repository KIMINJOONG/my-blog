import MarkDownRender from "./MarkDownRender";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    title: state.board.title,
    markdown: state.board.markdownContent,
    boardResult: state.board.boardResult,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkDownRender);