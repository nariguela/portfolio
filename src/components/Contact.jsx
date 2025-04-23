import React from "react";
import { Mail, GithubIcon, LinkedinIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="portfolio-contact">
      <h2>Entre em contato</h2>
      <p>
        E-mail:{" "}
        <a href="mailto:pedrodiasdacunha@gmail.com" aria-label="Email">
          pedrodiasdacunha@gmail.com
        </a>
      </p>
      <p>Fique à vontade para me chamar nas redes abaixo:</p>
      <div className="contact-icons">
        <a href="mailto:pedrodiasdacunha@gmail.com" aria-label="Email">
          <Mail />
        </a>
        <a
          href="https://github.com/nariguela"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <GithubIcon />
        </a>
        <a
          href="https://linkedin.com/in/pedro-dias-da-cunha"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <LinkedinIcon />
        </a>
      </div>
    </section>
  );
};

export default Contact;
