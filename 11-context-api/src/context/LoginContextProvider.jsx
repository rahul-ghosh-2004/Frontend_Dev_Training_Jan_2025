import React from "react";
import loginContext from "./loginContext";

const LoginContextProvider = ({ children }) => {
    const [userData, setUserData] = React.useState({
        "username": "",
        "password": ""
    })

    return (
        <loginContext.Provider value={{ userData, setUserData }}>
           { children }
        </loginContext.Provider>
    )
};

export default LoginContextProvider;