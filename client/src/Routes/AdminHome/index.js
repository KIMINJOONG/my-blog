import AdminHomeContainer from "./AdminHomeContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogin, loadUser } from "../../reducers/user";

const mapStateToProps = state => ({
  me: state.user.me
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin, loadUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHomeContainer);
