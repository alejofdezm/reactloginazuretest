import React from "react";
import ReactDOM from "react-dom";
import {RouterProvider } from 'react-router-dom';
import UserMenuList from "./view/Menu";
import "./recursos/css/index.css";

//import { UserProvider } from "./../../context/src/context/UserContext";

import UserProvider from "../src/context/UserContext";


ReactDOM.render(
<React.StrictMode> 
    <UserProvider>     
        <RouterProvider router={UserMenuList} />
    </UserProvider>
</React.StrictMode>
, document.getElementById("app"));
