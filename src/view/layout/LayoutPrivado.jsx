import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import MenuFormView from "../menu/UserMenuView";

import { useUserContext } from "../../context/UserContext";

const LayoutPrivado = () => {
  const navigation = useNavigation();
  const { user } = useUserContext();

  return (
    <div>
      <MenuFormView />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}

        {user ? (
          <Outlet />
        ) : (
          <>
            <h1>Debe de loguearse para estar aquí</h1>
          </>
        )}
      </main>
      <footer className="container text-center">Footer</footer>
    </div>
  );
};
export default LayoutPrivado;
