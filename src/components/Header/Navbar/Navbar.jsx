import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-5">
              <Logo></Logo>
              
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500 underline font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donations"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500 underline font-bold"
                  : ""
              }
            >
              Donations
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500 underline font-bold"
                  : ""
              }
            >
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
