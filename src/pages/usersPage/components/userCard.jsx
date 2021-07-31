import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const UserCard = ({ title, subtitle, active }) => (
  <Paper>
    <ListItem
      alignItems="flex-start"
      className={`${active && "bg-gray shadow"}`}
    >
      <ListItemAvatar>
        <Avatar alt={title} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              {subtitle}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  </Paper>
);
export default UserCard;
