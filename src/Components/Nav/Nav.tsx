import NavItem from "./NavItem";
import { navItems } from "./NavItems";
import ResumeButton from "./ResumeButton";

import "./Nav.css";

interface NavProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavItemType {
  name: string;
  link: string;
}

const Nav: React.FC<NavProps> = ({ clicked, setClicked }) => {
  return (
    <nav className={`Nav ${clicked ? "active" : ""}`}>
      {navItems.map((item: NavItemType) => (
        <NavItem
          setClicked={setClicked}
          clicked={clicked}
          name={item.name}
          link={item.link}
        />
      ))}
      <ResumeButton />
    </nav>
  );
};

export default Nav;
