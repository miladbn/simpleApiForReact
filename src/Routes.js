import React, { useContext } from "react";
import MessageBox from "./components/messageBox/messageBox";
import Context from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./pages/usersPage/usersPage";
import EditPage from "./pages/editPage/editPage";

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
          <Route path="/posts/:id/edit">
            <EditPage />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
