import React, { Suspense } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import Authloader from "./components/Common/Authloader/Authloader";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   alert("Some error occured");
  //   console.error(promiseRejectionEvent);
  // };
  componentDidMount() {
    // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    setTimeout(() => {
      this.props.initializeApp();
    });
  }
  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "unhandledrejection",
  //     this.catchAllUnhandledErrors
  //   );
  // }

  render() {
    if (!this.props.initialized) {
      return <Authloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route
              path="/profile/:userId?"
              render={() => {
                return (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProfileContainer />
                  </Suspense>
                );
              }}
            />
            <Route
              path="/dialogs"
              render={() => {
                return (
                  <Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </Suspense>
                );
              }}
            />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />

            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />

            <Route path="/settings" render={() => <Settings />} />

            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
