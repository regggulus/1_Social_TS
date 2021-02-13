export {store}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type PostType = {
    id: number
    message: string
    likesCount: string
}


type ProfilePageType = {
    posts: Array<PostType>
}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let store: RootStateType = {

        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: "20"},
                {id: 2, message: "It's my first post", likesCount: "25k"}
            ]
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
            {id: 1, message: "A lot of my staff.."},
            {id: 2, message: "Oke, we`ll see"},
            {id: 3, message: "Dont`s know"},
            {id: 4, message: "What`s up?"},
            {id: 5, message: "What`s up?"}

        ]
    }
}