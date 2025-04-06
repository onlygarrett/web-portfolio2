import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Steam Deal Scraper Automation
          </h3>
          <p className="project__description project__body">
            An <span className="project__specialText">automation</span> project
            I created to help reduce redundancy in a gamer's task in browsing game deals.
            This automation script utilizes a handful of Python-based data-manipulation libraries,
            among others, to scrape the <span className="project__specialText">Steam API</span>{" "}
            and different game deal websites, like <span className="project__specialText">isthereanydeals.com</span>.
            It then processes the data to find the best deals, and aggregates them into a csv file.
            This allows users to easily see the best deals available without having to manually check each website.
          </p>
          <p className="project__tech project__body">
            &gt; Python · Steam API · CLI Automation · Numpy · Pandas · BeautifulSoup
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/onlygarrett/dealscraper"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/dealscraper_example.png"
          srcSet="/images/dealscraper_example.png 750w, /images/dealscraper_example.png 1468w"
          sizes="50vw"
          alt="deal scraper example"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
