import React, { useState, useEffect, useContext } from "react";
import { getAllPosts } from "../../services/apis";
import context from "../../context";
import UserList from "./components/userList";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import UsersPosts from "./components/usersPosts";

const handleSuccess = (response, setUsersList, setAllPosts) => {
  const data = response.data;
  const users = {};
  data &&
    data.forEach((user) => {
      if (!Array.isArray(users[user.userId])) {
        users[user.userId] = [user];
      }
      users[user.userId].push(user);
    });
  setUsersList(users);
  setAllPosts(data);
};

const handleFailure = (error, setMessageBox) => {
  console.log(error);
  setMessageBox({
    open: true,
    severity: "error",
    message: "something went wrong , please try again",
  });
};

const Users = () => {
  const { setMessageBox } = useContext(context);
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);
  const [allPosts, setAllPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((response) => {
        handleSuccess(response, setUsersList, setAllPosts);
      })
      .catch((error) => {
        handleFailure(error, setMessageBox);
      });
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <UserList
              usersList={usersList}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </Grid>
          <Grid item xs={9}>
            <UsersPosts selectedUser={selectedUser} allPosts={allPosts} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Users;
