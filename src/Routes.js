import React, { useContext } from "react";
import MessageBox from "./components/messageBox/messageBox";
import Context from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./pages/users/users";
import EditPost from "./pages/editPost/editPost";

const Routes = () => {
  const { messageBox, setMessageBox } = useContext(Context);
  return (
    <>
      <MessageBox
        open={messageBox.open}
        message={messageBox.message}
        severity={messageBox.severity}
        onClose={() =>
          setMessageBox({
            open: false,
            severity: messageBox.severity,
            message: messageBox.message,
          })
        }
      />
      <Router>
        <Switch>
          <Route path="/editPost/:id">
            <EditPost />
          </Route>
          <Route path="/users"></Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
