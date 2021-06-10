import "./Level1.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./congratulations.css";

function Congratulation() {
  const [buttonClass, setButtonClass] = useState("hiddenClass");
  return (
    <div className="congratulation">
      <section className="text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<span className = 'congratsText'>CONGRATULATIONS!!!</span> Your spaceship is fixed, now you need to find the code to open the door."
              )
              .callFunction(() => {
                setButtonClass("showButton");
              })
              .start();
          }}
        />
      </section>
      <Link to="/level1">
        <button className={buttonClass}>TRY TO OPEN THE DOOR</button>
      </Link>
    </div>
  );
}

export default Congratulation;
