import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sourav-lahon-413a48228/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/lahonsourav" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/la_h_on/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://www.youtube.com/c/LAHON" target="_blank">
        <BsYoutube />
      </a>
      <a
        href="https://open.spotify.com/artist/4qtd7RxF9oURRXpLU6q2GN?si=m52UsBcIRwS7UKQQgbU_QA"
        target="_blank"
      >
        <BsSpotify />
      </a>
    </div>
  );
};

export default HeaderSocials;
