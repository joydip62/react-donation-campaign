import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
  const loca = useLocation();

  useEffect(() => {
    if (loca.pathname === '/') {
      document.title = "Donation Campaign - home";
    } else {
      document.title = `Donation Campaign ${loca.pathname.replace("/",'- ')}`;
    }
  },[loca.pathname])
    return (
      <div className="max-w-[1300px] m-auto">
        <Navbar></Navbar>
        <div className="py-10">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayout;