import React, { useState } from "react";
import {Link, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";

const App = () => {
  
  return (
    <div>
      <nav className="p-10 flex justify-center gap-10">
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route to='/' element={<Home />} />
        <Route to='/user' element={<User />} />
        <Route to='/about' element={<About />} />
      </Routes>
      <Home />
    </div>
  );
};

export default App;
