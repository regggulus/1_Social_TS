import {ActionsTypes} from "./state";
import {deflate} from "zlib";

const initialState = {
    sidebar: [
        {id: 1, name: "Manson"},
        {id: 2, name: "Edgar"},
        {id: 3, name: "Felix"}
    ]
}

export const sidebarReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        /*case "SIDE"
            return state*/
        default:
            return state

    }

}