import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class UserLooutContainer extends Component{
    componentDidMount(){
        this.props.userLogout();
    }
    render(){
        return(
            <Redirect to="/" />
        )
    }
}

export default UserLooutContainer;