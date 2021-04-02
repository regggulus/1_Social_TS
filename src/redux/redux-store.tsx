import {combineReducers, createStore} from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})
export type RootStoreType = ReturnType<typeof combineReducers>
export let store = createStore(reducers);

// export type ReduxStoreType = typeof store