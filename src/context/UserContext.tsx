import React, {useEffect} from "react";
import { createContext, useContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {

  let userLocalStorage = JSON.parse(localStorage.getItem("user"));  
      
  const [user, setUser] = useState(userLocalStorage);

  useEffect(() => {    
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
