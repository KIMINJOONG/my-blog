import UserLogoutContainer from "./UserLooutContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from "../../reducers/user";

const mapStateToProps = state => ({
  isLogout: state.isLogin,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogoutContainer);