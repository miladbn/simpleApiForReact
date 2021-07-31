import React from "react";
import List from "@material-ui/core/List";
import UserCard from "./userCard";
import PostCard from "./postCard";

const UsersPosts = ({ activeUser, posts }) => (
  <>
    {activeUser > 0 && (
      <List className="cursor-pointer">
        <UserCard title={`user ${activeUser}`} />
      </List>
    )}
    {posts &&
      posts
        .filter((post) => post.userId === activeUser)
        .map((post, index) => <PostCard key={index} post={post} />)}
  </>
);

export default UsersPosts;
