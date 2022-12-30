import React from "react";
// import CV from "F:lahonportfoliolahon-portfoliosrcassetspic.jpg";

const CTA = () => {
  const handleClick = () => {
    alert("Please check later");
  };
  return (
    <div className="cta">
      <a onClick={handleClick} href="#" className="btn">
        Resume
      </a>

      {/* <a href="#" target="_blank" download className="btn">
        Resume
      </a> */}
      <a
        href="#contact"
        // target="_blank"
        className="btn btn-primary"
      >
        Connect
      </a>
    </div>
  );
};

export default CTA;
