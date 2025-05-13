// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="p-6 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/configuracion" element={<Settings />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;