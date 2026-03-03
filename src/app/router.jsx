import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
// import Admin from "@/pages/Admin.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
