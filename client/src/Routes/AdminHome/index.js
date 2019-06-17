import AdminHomeContainer from "./AdminHomeContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogin } from "../../reducers/user";

const mapStateToProps = state => ({
  isLogin: state.isLogin,
  me: state.user.me
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHomeContainer);
