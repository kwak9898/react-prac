import React from "react";

const UserList = ({ user }) => {
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
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
};

export default UserList;
