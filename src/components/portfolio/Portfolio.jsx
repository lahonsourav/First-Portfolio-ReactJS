import React, { useEffect } from "react";
import "./Portfolio.css";

import IMG1 from "../../images/adhorua.jpg";
import IMG2 from "../../images/boijaa.jpg";
import IMG3 from "../../images/prapti.jpg";
import IMG4 from "../../images/proloy.jpg";
import IMG5 from "../../images/paap.jpg";
import IMG6 from "../../images/maa.jpg";

import PRO1 from "../../images/clock.webp";
import PRO2 from "../../images/logojpg.png";
import PRO3 from "../../images/logolahon.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { SlBasket } from "react-icons/sl";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="portfolio">
      <div class="muzieknootjes">
        <div class="noot-1">&#9835; &#9833;</div>
        <div class="noot-2">&#9833;</div>
        <div class="noot-3">&#9839; &#9834;</div>
        <div class="noot-4">&#9834;</div>
      </div>
      <h5 data-aos="fade-down">Listen</h5>
      <h2>My Tracks</h2>

      <div className="container portfolio__container">
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Adhorua Xopun | Pincool, Kstav</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://open.spotify.com/track/6UkRjsmUX1iAZnwBaS4JRA?si=6e2ed055a1d04ad7"
              className="btn"
              target="_blank"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/watch?v=OTNoeba54eo&ab_channel=WildWoodRecords"
              className="btn btn-primary"
              target="_blank"
            >
              YouTube
            </a>
          </div>
        </article>
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Boi Jaa | Mayukh ft. Gouranga</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://open.spotify.com/track/62iWw8RvtUt99LrT2XRPAF?si=eb6df8bd8a484e9c"
              className="btn"
              target="_blank"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/watch?v=SEE6_nwq43E&ab_channel=LAHON"
              className="btn btn-primary"
              target="_blank"
            >
              YouTube
            </a>
          </div>
        </article>
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Prapti | Mayukh ft. Kstav</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://open.spotify.com/track/4JNHpnwbVEmQhAMjtdP1I5?si=1577264cbfae4bb1"
              className="btn"
              target="_blank"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/watch?v=-Yzg9fJV8mo&ab_channel=LAHON"
              className="btn btn-primary"
              target="_blank"
            >
              YouTube
            </a>
          </div>
          <div class="muzieknootjes2">
            <div class="noot-1">&#9835; &#9833;</div>
            <div class="noot-2">&#9833;</div>
            <div class="noot-3">&#9839; &#9834;</div>
            <div class="noot-4">&#9834;</div>
          </div>
        </article>
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Proloy 2.0| Nilam, Ripon</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://open.spotify.com/track/3n9zmpy1l7iw0fNoXcs3tm?si=2d2059beb00945eb"
              className="btn"
              target="_blank"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/watch?v=-YwHXkFhe8Q&ab_channel=LAHON"
              className="btn btn-primary"
              target="_blank"
            >
              YouTube
            </a>
          </div>
          <div class="muzieknootjes2">
            <div class="noot-1">&#9835; &#9833;</div>
            <div class="noot-2">&#9833;</div>
            <div class="noot-3">&#9839; &#9834;</div>
            <div class="noot-4">&#9834;</div>
          </div>
        </article>
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Paap Punyo | Nilam, Ripon</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://open.spotify.com/track/065gkRrHJdedzGTWjTjMgc?si=6012245a41674e32"
              className="btn"
              target="_blank"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/watch?v=bS7xAo-UgsI&ab_channel=LAHON"
              className="btn btn-primary"
              target="_blank"
            >
              YouTube
            </a>
          </div>
        </article>
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Maa, Tribute to the Stars</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://open.spotify.com/track/2KI83nuLq3Etf6yhQmEUzx?si=ea5911d2eaf14524"
              className="btn"
              target="_blank"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/watch?v=VYTG1Z2eF1A&ab_channel=LAHON"
              className="btn btn-primary"
              target="_blank"
            >
              YouTube
            </a>
          </div>
        </article>
      </div>

      {/*partition2*/}
      <h5 data-aos="fade-down">Some of my</h5>
      <h2>Coding Projects</h2>
      <div className="container portfolio__container">
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={PRO1} alt="" />
          </div>
          <h3>25 Hour Clock using Python</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lahonsourav/25-hours-in-a-day"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={PRO2} alt="" />
          </div>
          <h3>Mujhe Books Do, Sell and Buy Books (ongoing)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lahonsourav/Mujhe-Books-Do"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article data-aos="zoom-in-up" className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={PRO3} alt="" />
          </div>
          <h3>More Projects soon...</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lahonsourav"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
