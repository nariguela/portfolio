import React from "react";
import "../styles/Portfolio.css";

export default function Navbar({ onPageChange, page }) {
  return (
    <nav className="portfolio-nav">
      <button
        onClick={() => onPageChange("home")}
        className={page === "home" ? "active" : ""}
      >
        Home
      </button>
      <button
        onClick={() => onPageChange("projects")}
        className={page === "projects" ? "active" : ""}
      >
        Projects
      </button>
      <button
        onClick={() => onPageChange("contact")}
        className={page === "contact" ? "active" : ""}
      >
        Contact
      </button>
    </nav>
  );
}
