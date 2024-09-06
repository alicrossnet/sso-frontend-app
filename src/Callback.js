import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const Callback = () => {
  const history = useHistory();

  setTimeout(() => history.push('/'), 3000); // Redirect to homepage after 3 sec
  return <div> You have been successfully logged in. You will be redirected in a few seconds...</div>;
  
};

export default Callback;
