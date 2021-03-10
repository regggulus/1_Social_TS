let _onChange = () => {
    console.log("hi")
}
export const subscriber = (observer: () => void) => {
    _onChange = observer
}

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
    _changeNewPostText: (newText: string) => void
    _addPost: (addNewPost: string) => void
    _onChange: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddPostAC | ChangeNewPostTextAC
export type AddPostAC = {
    type: 'ADD-POST'
    addNewPost: string
}
export type ChangeNewPostTextAC = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
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
    _addPost(addNewPost: string) {
        const newPost: PostType = {
            id: 3,
            message: addNewPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChange()
    },
    _changeNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    subscriber(observer) {
        this._onChange = observer
    },
    _onChange() {console.log('state change')},
    getState() {
        return this._state
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            this._addPost(action.addNewPost)
            /*const newPost: PostType = {
                id: 3,
                message: action.addNewPost,
                likesCount: 0
            }*/
        }else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            /* this._state.profilePage.newPostText = action.newText
            this._onChange()*/
            this._changeNewPostText(action.newText)
        }

    }
}

// export default store;
