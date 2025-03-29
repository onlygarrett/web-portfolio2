import Logo from "../Nav/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialIcons";
import SourceCodeLink from "./SourceCode";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo clicked={false} setClicked={() => {}} />
      <p className="footer__copyright">Copyright © 2021 Jack Parsons.</p>
      <SourceCodeLink />
    </footer>
  );
}

export default Footer;
