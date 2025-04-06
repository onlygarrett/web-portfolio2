import "./LeftSocialMediaIcons.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

function LeftSocialMediaIcons() {
  return (
    <div className="leftSocialMediaIcons">
      <hr className="leftSocialMediaIcons__mobileLeftBar mobile__hr" />
      <a
        href="https://github.com/onlygarrett"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my GitHub"
      >
        <FaGithub className="leftSocialMediaIcons__github icon" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/garrett-rumschik/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <FaLinkedin className="leftSocialMediaIcons__linkedin icon" size={30} />
      </a>
      <a
        href="https://www.instagram.com/only_garrett/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Instagram"
      >
        <FaInstagram
          className="leftSocialMediaIcons__instagram icon"
          size={30}
        />
      </a>
      <a
        href="https://bsky.app/profile/onlygarrett.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my bluesky"
      >
        <FaBluesky className="leftSocialMediaIcons__bluesky icon" size={30} />
      </a>
      <div className="leftSocialMediaIcons__verticalBar" />
      <hr className="leftSocialMediaIcons__mobileRightBar mobile__hr" />
    </div>
  );
}

export default LeftSocialMediaIcons;
