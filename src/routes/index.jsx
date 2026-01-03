import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Button>Teste</Button>}></Route>
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
}

export default AppRoutes;
