import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SecurePage = () => {
    const history = useHistory();
    const store = JSON.parse(localStorage.getItem("auth_user"));
    const token = store?.access_token;
    const [response, setResponse] = useState("");
    console.log("butt",token);

    const fetchApi = async () => {
        axios.get("backend_secure_endpoint",{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => {
            setResponse(res.data);
        })
        .catch(err => {
            setResponse("Unauthorized access : You are not authorized to make this call");
        })
    };

    return (
        <>
            <button className="bg-green-500 text-white rounded-md p-2 ml-3" onClick={fetchApi}>fetch api</button>       
            <div>
                {response}
            </div>
        </>
    )
}

export default SecurePage;