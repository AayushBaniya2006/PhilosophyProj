import React, { useState } from "react";
import "./App.css";
import Forum from "./Forum";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  Link,

} from "react-router-dom";
import Upgrade from "./Upgrade";
import Mainpage from "./Mainpage";
import Homepage from "./Homepage";




function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    set;
  };






  return (
    <Homepage></Homepage>
    
    
  );
}

export default App;
