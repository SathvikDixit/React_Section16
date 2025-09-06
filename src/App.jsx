import React, { useState } from "react";
import {Link, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";

const App = () => {
  
  return (
    <div className="p-1 container m-auto  ">
      <nav className="mt-10 flex justify-center gap-10">
        <Link to='/'>Home</Link>
        <Link to='user'>User</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  );
};

export default App;
