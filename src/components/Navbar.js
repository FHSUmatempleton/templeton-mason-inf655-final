import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as HomeIcon } from "./assets/svg/homeIcon.svg";
import { ReactComponent as SearchIcon } from "./assets/svg/searchIcon.svg";
import { ReactComponent as UserIcon } from "./assets/svg/userIcon.svg";
import { ReactComponent as KeyIcon } from "./assets/svg/keyIcon.svg";
import { ReactComponent as TaskList } from "./assets/svg/taskList.svg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <HomeIcon fill="#fff" width="50px" height="36px" />
            <p>Home</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/sign-in")}>
            <KeyIcon fill="#fff" width="50px" height="36px" />
            <p>Sign In</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}