import UserContainer from "./UserContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userJoin } from "../../reducers/user";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userJoin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
