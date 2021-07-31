import React from "react";
import List from "@material-ui/core/List";
import UserCard from "./userCard";

const UsersList = ({ users, activeUser, onSelectUser }) => (
  <>
    {users.map((user, index) => (
      <List
        key={index}
        onClick={() => onSelectUser(user)}
        className="cursor-pointer"
      >
        <UserCard
          title={`user ${user}`}
          subtitle="comments"
          active={user === activeUser}
        />
      </List>
    ))}
  </>
);

export default UsersList;
