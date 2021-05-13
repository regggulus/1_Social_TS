import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


type ProfileContainerPropsType = {
    profile: any
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props.profile} profile={this.props.profile}/>
            </div>
        )
    }
}
const mapStateToProps = (state: any): mapStateToProps => {
profile: state.profile
}
export const ProfileContainer = connect<mapStateToProps, {setUsersProfile}>(ProfileContainer)

