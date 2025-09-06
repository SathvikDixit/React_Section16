import React, { useState, createContext } from "react";

export const UserContext = createContext();
const Context = (props) => {
    const [user, setUser] = useState([
        {id: 0, userName: "John Doe", email: "john@example.com"},
        {id: 1, userName: "Jane Smith", email: "jane@example.com"},
        {id: 2, userName: "Alice Johnson", email: "alice@example.com"}
    ]);

  return <UserContext.Provider value={{user,setUser}}>{props.children}</UserContext.Provider>;
};

export default Context;
