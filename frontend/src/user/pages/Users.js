import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mario",
      image:
        "https://static.wikia.nocookie.net/3c88a0ab-fea5-432e-b1a9-69fd90d81273",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
