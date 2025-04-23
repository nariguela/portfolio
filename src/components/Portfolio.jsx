import { useState } from "react";
import React from "react";

import "../styles/Portfolio.css";

import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
  const [page, setPage] = useState("home");

  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <>
      <Navbar page={page} onPageChange={handlePageChange} />
      <div className="portfolio-container">
        {page === "home" && <Home />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
      </div>
    </>
  );
}
