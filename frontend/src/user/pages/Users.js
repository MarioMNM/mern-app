import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mario Novella",
      image:
        "https://static.wikia.nocookie.net/3c88a0ab-fea5-432e-b1a9-69fd90d81273",
      places: 3,
    },
    {
      id: "u33",
      name: "El Nano",
      image:
        "https://fotografias.antena3.com/clipping/cmsimages01/2023/02/09/9B15C034-6FEF-4A5B-894A-ADF1272A9662/fernando-alonso-imagen-facilitada-aston-martin_104.jpg?crop=800,800,x0,y0&width=1200&height=1200&optimize=low&format=webply",
      places: 33,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
