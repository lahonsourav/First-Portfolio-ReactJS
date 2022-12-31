import React, { useState } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect/dist/core";

const Header = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  // const happen = () => {
  //   alert("This is working");
  // };

  setInterval(updateTime, 1000);
  return (
    <header>
      <Fade bottom>
        <div className="container header__container">
          <h5>This is</h5>

          <h1>Lahon</h1>
          <div class="wrapper2">
            <div class="typing-demo">an engineer who loves rap</div>
          </div>

          {/* <button onClick={happen}>Click me</button> */}

          {/* <h5 className="text-light">An Engineer who loves Rap</h5> */}
          <CTA />

          <HeaderSocials />

          <div className="clock">
            <h4>The time is</h4>
            <h1>{currentTime}</h1>
          </div>
          <a
            href="https://www.youtube.com/@sforlahon5190"
            target="_blank"
            className="scroll__down"
          >
            Watch my Random videos
          </a>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
