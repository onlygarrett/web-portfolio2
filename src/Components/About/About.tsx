import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";

import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

// import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          👋 Hello My name is Garrett Rumschik and I am a Security Engineer for{" "}
          <span className="about__specialText">Novacoast</span>.
          <br />
          <br />
          🏢 I have previously worked at at{" "}
          <span className="about__specialText">Mindforge LLC</span> and
          done work with <span className="about__specialText">Palo Alto Networks</span>.
          With roles as a Fullstack Software Engineer and a Expertise Engineer
          respectively. <br /> <br />
          💥Currently, I am interested in, and learning about{" "}
          <span className="about__specialText">Go</span>,{" "}
          <span className="about__specialText">Microservices</span>, and a little{" "}
          <span className="about__specialText">React frontend</span>.
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/garrett_rumschik_headshot.jpg"
        alt="Brand Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
