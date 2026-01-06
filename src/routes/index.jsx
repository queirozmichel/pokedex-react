import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Navigate to="/pokedex"></Navigate>}></Route>
        <Route path="/pokedex" element={<Navigate to="/pokedex"></Navigate>}></Route>
        <Route path="/quiz" element={<Navigate to="/quiz"></Navigate>}></Route>
        <Route path="*" element={<Navigate to="/pokedex"></Navigate>}></Route>
      </Route>
    </Routes>
  );
}
