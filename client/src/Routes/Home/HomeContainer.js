import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    
    componentDidMount(){
        this.props.loadUser();
    }
    render() {
        const { me } = this.props;
        return <HomePresenter me={me} />
    }
}