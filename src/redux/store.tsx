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
    post: Array<PostType>
    postMessage: string
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

export const store: RootStateType = {

    profilePage: {
        post: [
            {id: 1, message: "Hi, how are you", likesCount: 20},
            {id: 2, message: "It's my first post", likesCount: 25}
        ],
        postMessage: ''
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
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    store.profilePage.postMessage = ""
    store.profilePage.post.push(newPost)
}

export default store;