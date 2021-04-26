import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "HI, how are u?", count: 5 },
        { id: 2, message: "It is my first post", count: 7 },
      ],
      newPostText: "Здесь могла быть Ваша реклама",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Alena" },
      ],
      messages: [
        { id: 1, message: "HI" },
        { id: 2, message: "All is ok" },
        { id: 3, message: "WOW" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    debugger;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
