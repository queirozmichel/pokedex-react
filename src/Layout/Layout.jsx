import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar showSearch={pathname.startsWith("/pokedex")}></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
