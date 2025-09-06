import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-2xl">User List</h1>
      <div className="mt-10 flex flex-col w-1/2 ">
        {user.map((u) => (
          <Link to={`/user/${u.id}`} key={u.id} className="p-3 mb-5 bg-red-100">
            {u.userName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
