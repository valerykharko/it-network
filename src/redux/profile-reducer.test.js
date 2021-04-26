import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "HI, how are u?", count: 5 },
    { id: 2, message: "It is my first post", count: 7 },
  ],
};

it("new post should be added", () => {
  //1. test data
  let action = addPostActionCreator("it-tyda");

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

it("message should be correct", () => {
  //1. test data
  let action = addPostActionCreator("ittyda");

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[2].message).toBe("ittyda");
});
