import React from 'react';
import {useHistory} from "react-router-dom";
const Logout = () => {
    const history = useHistory();
    sessionStorage.removeItem("current-session");
    history.push("/login")
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
        </div>
    );
};

export default Logout;
