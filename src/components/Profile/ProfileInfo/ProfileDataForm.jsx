import React from "react";
import styles from "./ProfileInfo.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../Common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <b>Full name: </b> {createField("Full name", "fullname", [], Input)}
      </div>
      <div>
        <b>Looking for a job: </b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills: </b>
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me: </b>
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b> :{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={styles.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
