import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = () => {
  // const USERS = [
  //   {
  //     id: "u1",
  //     name: "Mario Novella",
  //     image:
  //       "https://static.wikia.nocookie.net/3c88a0ab-fea5-432e-b1a9-69fd90d81273",
  //     places: 3,
  //   },
  //   {
  //     id: "u33",
  //     name: "El Nano",
  //     image:
  //       "https://fotografias.antena3.com/clipping/cmsimages01/2023/02/09/9B15C034-6FEF-4A5B-894A-ADF1272A9662/fernando-alonso-imagen-facilitada-aston-martin_104.jpg?crop=800,800,x0,y0&width=1200&height=1200&optimize=low&format=webply",
  //     places: 33,
  //   },
  // ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("http://localhost:5000/api/users/");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;
