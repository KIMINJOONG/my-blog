import EditorPane from "./EditorPane";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { onChangeInput } from '../../../reducers/board';

const mapStateToProps = state => ({
    title: state.board.title,
    markdown: state.board.markdownContent
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({onChangeInput}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorPane);