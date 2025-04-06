import Logo from "../Nav/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo clicked={false} setClicked={() => { }} />
    </footer>
  );
}

export default Footer;
