import React from "react";
import {BrowserRouter as Router,Route,Routed, Routes} from "react-router-dom"
import HomePage from "../pages/HomePage";
import Support from "../pages/Support";
import SupportInner from "../pages/SupportInner";
export default function AppRoutes() {
  return <Router>
    <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/supportinner" element={<SupportInner/>}/>
    </Routes>
  </Router>;
}
