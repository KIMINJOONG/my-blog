import EditorPreview from "./EditorPreview";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    markdown: state.board.markdownContent,
    boardResult: state.board.boardResult,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorPreview);