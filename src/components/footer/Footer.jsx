import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        THANKS FOR VISITING
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About me</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Skills</a>
        </li>
        <li>
          {" "}
          <a href="#services">Bio Data</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Read Slokas</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>
          &copy;{" "}
          <a
            href="https://www.freepik.com/free-vector/global-networking-technology-background-digital-communication_16406291.htm#page=2&query=website%20background&position=10&from_view=keyword"
            target="_blank"
          >
            Image by rawpixel.com
          </a>{" "}
          on Freepik
        </small>
        <div className="footer__copyright__youtube">
          <small>
            I used &nbsp;
            <a
              href="https://www.youtube.com/watch?v=G-Cr00UYokU&t=9010s&ab_channel=EGATOR"
              target="_blank"
            >
              this design template
            </a>{" "}
            and applied my own colors, animation and logic to built this website
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
