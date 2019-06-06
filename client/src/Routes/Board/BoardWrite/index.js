import BoardWriteContainer from "./BoardWriteContainer";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  title: state.btitle,
  description: state.board.description
});

export default connect(mapStateToProps)(BoardWriteContainer);
