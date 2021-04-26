import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import { Field, Form, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} count={p.count} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  const maxLength10 = maxLengthCreator(10);

  const AddNewPostForm = (props) => {
    return (
      <Form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name="newPostText"
            component={Textarea}
            placeholder={"Здесь могла быть Ваша реклама :)"}
            validate={[required, maxLength10]}
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </Form>
    );
  };

  const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
    AddNewPostForm
  );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
