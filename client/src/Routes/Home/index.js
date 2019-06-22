import HomeContainer from "./HomeContainer";
import { connect } from "react-redux";
import { loadUser } from '../../reducers/user';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    me: state.user.me,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadUser }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);