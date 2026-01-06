import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Pokedex from "../pages/Pokedex";
import Quiz from "../pages/Quiz";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Pokedex></Pokedex>}></Route>
        <Route path="/pokedex" element={<Pokedex></Pokedex>}></Route>
        <Route path="/quiz" element={<Quiz></Quiz>}></Route>
        <Route path="*" element={<Navigate to="/pokedex"></Navigate>}></Route>
      </Route>
    </Routes>
  );
}
