import {rerenderEntireTree} from "../index";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type SidebarType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarPageType = {
    sidebar: Array<SidebarType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarPageType
}

export type StoreType = {
    _state: RootStateType
    changeNewPostText: (newText: string) => void
    addPost: () => void
    rerenderEntireTree: () => void
    subsriber: (observer: () => void) => void
    getState: () => RootStateType

}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 20},
                {id: 2, message: "It's my first post", likesCount: 25}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Mason"},
                {id: 2, name: "Edgar"},
                {id: 3, name: "Felix"},
                {id: 4, name: "Jack"},
                {id: 5, name: "Calvin"}
            ],
            messages: [
                {id: 1, message: "A lot of my staff..."},
                {id: 2, message: "Oke, we`ll see"},
                {id: 3, message: "Dont`s know"},
                {id: 4, message: "What`s up?"}

            ]
        },
        sidebarPage: {
            sidebar: [
                {id: 1, name: "Manson"},
                {id: 2, name: "Edgar"},
                {id: 3, name: "Felix"}
            ]
        }
    },
    addPost() {
        const newPost: PostType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        rerenderEntireTree()
    },
    changeNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree()
    },
    subsriber(observer: () => void) {
        this.rerenderEntireTree = observer
    },
    rerenderEntireTree() {

    },
    getState() {
        return this._state
    }
}

// export default store;
