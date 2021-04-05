import React, { useEffect, useState } from "react";
import Axios from "axios";

import NormalUser from "../components/NormalUser";
import Mod from "../components/Mod";
import Admin from "../components/Admin";

const Main = () => {
    const [role, setRole] = useState(null);

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setRole(1);
            } else {
                setRole(0);
            }
        })
    }, []);

    return (
        <div>
            {role === 0 && <NormalUser />}
            {role === 1 && <Mod />}
            {/*{role === "admin" && <Admin />}*/}
        </div>
    );
};

export default Main;