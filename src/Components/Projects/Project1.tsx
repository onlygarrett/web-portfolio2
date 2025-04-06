import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

interface Project1Props {
  id: string;
}

function Project1({ id }: Project1Props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image project__imageDark"
          src="/images/promotepdx.png"
          alt="PromotePDX Project"
          width="30%"
          height="auto"
          loading="lazy"
        />

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">PromotePDX Website</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">web app</span> built
            for a Portland-based live music discovery company. Allows users to{" "}
            <span className="project__specialText">
              search through local live music events
            </span>
            , with a thorough{" "}
            <span className="project__specialText">event calendar</span> that pulls from a
            company-managed event database at regular timed intervals. This allows users to navigate to the{" "}
            <span className="project__specialText">event page</span>
            for each given event's venue. The event page, searching and filtering service,
            and pipeline for updating the event database were all built by me.
            Finally, the app also houses a {" "}
            <span className="project__specialText">contact page</span> as well as links to socials and a sign up
            form for their company newsletter. All of the frontend, backend, hosting, and database management was done by me.
            On the server side, the app has automatic deployment and continuous integration using <span className="project__specialText">GitHub Actions and Docker</span>.
          </p>
          <p className="project__tech project__body">
            &gt; React · Django · Docker · Google Cloud Platform · DigitalOcean
            Nginx · PostgreSQL · Python · Redis · Celery
          </p>
          <a
            className="project__sourceCode"
            href="https://promotepdx.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            {/* <FaGithub className="project__githubLogo" size={25} /> */}
            <h3 className="project__sourceCodeText">Link to Website</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
