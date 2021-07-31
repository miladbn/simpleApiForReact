import React, { useState, useEffect, useContext } from "react";
import { getPosts } from "../../services/postService";
import context from "../../context";
import UserList from "./components/usersList";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import UsersPosts from "./components/userPosts";
import _ from "lodash";

const handleSuccess = (response, setUsers, setPosts) => {
  const { data: posts } = response;
  const users = _.uniq(posts.map((post) => post.userId));
  setUsers(users);
  setPosts(posts);
};

const handleFailure = (setMessageBox) =>
  setMessageBox({
    open: true,
    severity: "error",
    message: "Something went wrong, please try again",
  });

const Users = () => {
  const { setMessageBox } = useContext(context);

  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(0);
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts()
      .then((response) => handleSuccess(response, setUsers, setPosts))
      .catch(() => handleFailure(setMessageBox));
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <UserList
              users={users}
              activeUser={activeUser}
              onSelectUser={(user) => setActiveUser(user)}
            />
          </Grid>
          <Grid item xs={9}>
            <UsersPosts activeUser={activeUser} posts={posts} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Users;
