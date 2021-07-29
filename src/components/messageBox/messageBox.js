import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const MessageBox = ({ message, open, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      TransitionComponent={TransitionUp}
      onClose={onClose}
    >
      <MuiAlert elevation={6} variant="filled" severity={severity}>
        <div>{message}</div>
      </MuiAlert>
    </Snackbar>
  );
};

export default MessageBox;
