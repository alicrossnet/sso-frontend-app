import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from 'react-oidc-context';
import { WebStorageStateStore } from "oidc-client";

const settings = {
  authority: 'issuer',
  client_id: "application_clientId",
  client_secret:"application_secret",
  redirect_uri: "applicaiton_redirect_url",
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: window.location.origin+"/logout",
  revokeAccessTokenOnSignout: true,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider {...settings}
    onSigninCallback={(user) =>{
      console.log("signincallback app1 : ", user);
      if(user && user !== undefined){
        localStorage.setItem("auth_user", JSON.stringify(user));
        window.history.replaceState(
                {},
                document.title,
                window.location.pathname
      );
      }
      
     }}
     onSignoutCallback={() => {
      alert("signoutcall back")
    }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
