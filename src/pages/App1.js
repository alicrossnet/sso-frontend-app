import React,{useEffect, useState} from "react";
import useAuthActions from "../component/AuthHook";

const App1 = () => {
  const {auth, LoginRedirect,ProcessSilentActivity, LogoutRedirect, GetLoggedInUser} = useAuthActions();
  console.log("custom",auth);
  const localuser = useState(GetLoggedInUser());

  useEffect(() => {
    const intervalId = setInterval(ProcessSilentActivity, 5000);
    return () => clearInterval(intervalId);
  }, []);
 
  if (auth.isAuthenticated) {
    return(
      <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="p-4 border border-gray-300 bg-white w-[800px] rounded-md flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-semibold pb-4">Welcome back 👋</h1>
              <h1 className="pb-4">{auth?.user?.profile.email}</h1>
              <button
                className="bg-red-500 text-white rounded-md p-2"
                onClick={() => {
                  LogoutRedirect();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </>
    ) ;
  }


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-4 border border-gray-300 bg-white w-[300px] rounded-md h-[200px] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="pb-5 text-xl">Application 1</h1>
          <button
            className="bg-green-500 text-white rounded-md p-2"
            onClick={() => LoginRedirect()}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default App1;
