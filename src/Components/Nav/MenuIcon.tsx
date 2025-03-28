import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./MenuIcon.css";

interface MenuIconProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuIcon: React.FC<MenuIconProps> = ({ clicked, setClicked }) => {
  return (
    <div className="menuIcon" onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <FaTimes className="menuIcon__icon" size={45} />
      ) : (
        <FaBars className="menuIcon__icon" size={45} />
      )}
    </div>
  );
};

export default MenuIcon;
