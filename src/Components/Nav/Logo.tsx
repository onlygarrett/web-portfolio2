import React from "react";
import { HashLink } from "react-router-hash-link";

interface LogoProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo: React.FC<LogoProps> = ({ clicked, setClicked }) => {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <img src="/images/logo.png" alt="Brand Logo" width={75} height={75} />
      </HashLink>
    </div>
  );
};

export default Logo;
