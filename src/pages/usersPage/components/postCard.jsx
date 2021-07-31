import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <Link to={`/posts/${post.id}/edit`}>
    <List className="cursor-pointer">
      <Paper>
        <ListItem>
          <ListItemText primary={post.title} />
        </ListItem>
      </Paper>
    </List>
  </Link>
);

export default PostCard;
