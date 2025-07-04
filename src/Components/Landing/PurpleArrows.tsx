import "./PurpleArrows.css";
// import { NavHashLink } from "react-router-hash-link";

function PurpleArrows() {
  const scrollToAbout = () => {
    // Find the about section by id and scroll to it
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <button
      className="purpleArrows"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
      onClick={scrollToAbout}
      aria-label="Scroll to About section"
      type="button"
    >
      <img
        className="purpleArrows"
        src="/images/bottom_purple_arrows.svg"
        alt="bottom purple arrows"
      />
    </button>
  );
}

export default PurpleArrows;
