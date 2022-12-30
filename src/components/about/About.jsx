import React, { useEffect } from "react";
import "./about.css";
import { GiPiercedHeart } from "react-icons/gi";
import { GiBurningPassion } from "react-icons/gi";
import { FaWpexplorer } from "react-icons/fa";
import PHOTO from "../../assets/mejpg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <h5 data-aos="fade-down">Get To Know</h5>

      <h2>About Me</h2>

      <div className="container about__container">
        <div data-aos="zoom-in" className="about__me">
          <div className="small__hole"></div>
          <div className="about__me-image">
            <div className="small__hole"></div>
            <img
              // src="https://lh3.googleusercontent.com/fqzASP1jLBm6P3Rhy_jUreBuiNb4cEM1Z7UrqJn7u4ZAWlB-ag5CezDgg_vNmA8bTa0iBXoR-F4SWMeMMyXb608AXAPEuC3Ilis2-3vZiTptth9ORf2iCvFRkInGtrsSa8nI-CCMkdqKdGh32Ys7DdYT7rJ3VJ7brBAGZPLw7xHx-NNPYwF3D73afU6GxPI4y82ZSqkpbYCxstnVHxzBlDprl3wI9A6wB_vGZBmO6wGZLIV6jSZMQhFyM3Wg_jtzUWoSTve9HOt98-lrUdpWF-98BMcbXXmZfiaZAslVicN93AvIiqO9TFZ3fFbcT_9-iR3lGO-NmrKTt3ad3CMiL38E4-wSmkMADvf9zU1xhmYpAO1KTTk9i_1UgaKf1XVsOdx12e6Heb4aknfy5vl2NIzWJuIj9QPdx2M9MM8v03zGEH86yF9RF_O7siFbDBnfnbMNkj72L4pyTFTafXxgxZ4KdDPmVb3UmoaWGnLgSm7U6M160czaIfzLbpKuBjFD1OzOM9iIKGbAo8eDmcMJ67jJq4EatL49YDpBI6MUh6W0QUWYbbFUHB6Hm0ELyJoP0XcCgvnczSTLC-vit4b9_IX66RqSE0DFxkB__ae0H5vzg7qLGiI9yYUr9EtJjt1XBqMLxFWrUDM4wsghILlgMd-s_TGf8aU7M77m6m1XhTMBGgAz1sIIR3oRlMLeUG9qvu-5rLAtGcpddZhyO2LLZVoHphyQ5qzhpRVcN9vrWIglbZHwgqZ0nafcSsv9p34VG5DUvKIS26Y9-LBPcIBta1q2wt8Q-13lpOvBk1RbcwqbL8nPpujxagbRMbmrXoA1Evltogl1G8pXF1q3N1Y1fNb6rG3KecZaj1NHITfZIqKrIiUW1r3xGXbBWcVDYp8PcP6SQSLv1cVLVAe03L0boIvymatDmCdk3BzrjRPWyKb3=s990-no?authuser=0"
              src={PHOTO}
              alt="About Image"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article data-aos="fade-up-right" className="about__card">
              <GiPiercedHeart className="about__icon" />
              <h5>Creative</h5>
              <small>being artistic </small>
            </article>

            <article data-aos="fade-up" className="about__card">
              <GiBurningPassion className="about__icon" />
              <h5>Passionate</h5>
              <small>to learn new</small>
            </article>

            <article data-aos="fade-up-left" className="about__card">
              <FaWpexplorer className="about__icon" />
              <h5>Explorer</h5>
              <small>love exploring</small>
            </article>
          </div>

          <p>
            I am a Computer Science and Engineering student of National
            Institute of Technology (NIT) Silchar;
            <br />
            <br />
            Along with my study I love to make Rap (Hip Hop) Music, write songs;
            I love thinking about Universe and Space, The huge stars, the gas
            giant Jupiter
            <br />
            <br />I love doggos and cats, but frog is cute too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
