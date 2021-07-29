import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const UsersPosts = ({ selectedUser, allPosts }) => {
  return (
    <>
      {selectedUser > 0 && (
        <List className="cursor-pointer">
          <Paper>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="test" src="" />
              </ListItemAvatar>
              <ListItemText
                primary={`user ${selectedUser}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      all posts
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Paper>
        </List>
      )}
      {allPosts &&
        allPosts
          .filter((key) => {
            if (key.userId == selectedUser) {
              return key;
            }
          })
          .map((item, index) => (
            <Link to={`/editPost/${item.id}`}>
              <List key={index} className="cursor-pointer">
                <Paper>
                  <ListItem>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </Paper>
              </List>
            </Link>
          ))}
    </>
  );
};

export default UsersPosts;
