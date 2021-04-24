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

/*type DialogsPropsType = {
    store: StoreType
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    changeNewMessageText: (newText: string) => void
    newSendMessage: (newSendMessage: string) => void
}*/

/*export function DialogsContainer(props: DialogsPropsType) {
    <StoreContext.Consumer>
    const state = props.store.getState().dialogsPage
    const onSendMessageClick = (newMessageText: string) => {
        props.store.dispatch(newSendMessageAC(newMessageText))
    }
    const onNewMessageChange = (newMessageText: string) => {
        props.store.dispatch(changeNewMessageAC(newMessageText))
    }

    return (
        <Dialogs dialogsPage={state} dispatch={props.dispatch} changeNewMessageText={onNewMessageChange}
                 newSendMessage={onSendMessageClick}/>
    )
    </StoreContext.Consumer>
}*/
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