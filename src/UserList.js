import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "name1",
      email: "email1",
    },
    {
      id: 2,
      username: "name2",
      email: "email2",
    },
    {
      id: 3,
      username: "name3",
      email: "email3",
    },
  ];

  return (
    <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[2].email})</span>
      </div>
    </div>
  );
};
