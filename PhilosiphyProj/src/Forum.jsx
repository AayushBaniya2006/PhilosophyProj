import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Mainpage from "./Mainpage"; // Import your Mainpage component
import Upgrade from "./Upgrade"; // Import your Upgrade component
import Login from "./Login"; // Import your Login component

function Forum() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <>
   </>
  );
}

export default Forum;
