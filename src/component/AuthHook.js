import { useAuth } from "react-oidc-context";

const useAuthActions = () => {
    const auth = useAuth();

    const LoginRedirect = () => {
        auth.signinRedirect({redirect_uri:"http://localhost:3001/callback"});
    }

    const LogoutRedirect = () => {
        localStorage.removeItem("auth_user");
        auth.signoutRedirect({post_logout_redirect_uri:"http://localhost:3001/"});
    }

    const GetLoggedInUser = () => {
        return localStorage.getItem("auth_user");
    }

    const ProcessSilentActivity = () => {
        const localUser = localStorage.getItem("auth_user");
        console.log("process silent",(localUser === undefined || localUser === null) && !auth.isAuthenticated)

        //look for silent login
        if(localUser === undefined || localUser === null){
            console.log("going for silent", localUser, auth)
            auth.signinSilent().then(user => {
                console.log("try silent",user);
                if(user && user !== undefined){
                    localStorage.setItem("auth_user", JSON.stringify(user));
                }
            }).catch(() => console.log("no active session - so no silent sign in"));
        }
        //look for silent logout
        else if(!(localUser === undefined || localUser === null)){
            console.log("perform silent sign out");
            auth.querySessionStatus().then((res) => console.log("query res",res))
            .catch((err) => {
                localStorage.removeItem("auth_user")
                auth.signoutSilent()
                console.log("query err", err)
            })
        }
    }

    return {
        LoginRedirect,
        LogoutRedirect,
        GetLoggedInUser,
        ProcessSilentActivity,
        auth
    };
}


export default useAuthActions;
