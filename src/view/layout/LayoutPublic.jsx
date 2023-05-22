import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import MenuFormView from "../menu/UserMenuView";

const LayoutPublic = () => {
    const navigation = useNavigation();   
    
    return (
        <div>
            <MenuFormView />
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}

                <Outlet /> 
            </main>
            <footer className="container text-center">Footer</footer>
        </div>
    );
};
export default LayoutPublic;