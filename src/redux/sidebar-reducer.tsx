import {ActionsTypes} from "./state";

export type SidebarType = {
    id: number
    name: string
}
export const initialState = {
    sidebar: [
        {id: 1, name: "Manson"},
        {id: 2, name: "Edgar"},
        {id: 3, name: "Felix"}
    ]
}
export type initialStateType = typeof initialState

/*export const sidebarAC = () => {
    ({type: SIDEBAR})
}*/

export const sidebarReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        /*case "SIDEBAR":

            return state*/
        default:
            return state

    }

}