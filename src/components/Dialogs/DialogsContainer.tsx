import React from "react";
import {
    changeNewMessageAC,
    DialogType,
    MessageType,
    newSendMessageAC
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

type MapDispatchPropsType = {
    onNewMessageChange: (newMessageText: string) => void
    onSendMessageClick: (newMessageText: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        onNewMessageChange: (newMessageText: string) => {
            dispatch(changeNewMessageAC(newMessageText))
        },
        onSendMessageClick: (newMessageText: string) => {
            dispatch(newSendMessageAC(newMessageText))
        }

    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)