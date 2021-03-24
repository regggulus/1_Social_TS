import {combineReducers, createStore} from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer
})

export type RootStateType = RetunType<typeof combineReducers>

export let store = createStore(reducers);