import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const UserList = ({ usersList, selectedUser, setSelectedUser }) => {
  return (
    <>
      {Object.keys(usersList).map((user, index) => (
        <List
          key={index}
          onClick={() => {
            setSelectedUser(user);
          }}
          className="cursor-pointer"
        >
          <Paper>
            <ListItem
              alignItems="flex-start"
              className={`${selectedUser === user && "bg-gray shadow"}`}
            >
              <ListItemAvatar>
                <Avatar alt={user} src="" />
              </ListItemAvatar>
              <ListItemText
                primary={`user ${user}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      user comments
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Paper>
        </List>
      ))}
    </>
  );
};

export default UserList;
