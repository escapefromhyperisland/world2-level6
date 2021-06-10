import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./level2.css";

const Level2 = () => {
  const [classButton, setClassButton] = useState("false");
  const [nextButtonClass, setNextButtonClass] = useState("false");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue((previousValue) => e.target.value);
  };

  function handleClick() {
    if (inputValue === "72779673") {
      setClassButton("true");
      setNextButtonClass("nextButton");
      console.log(classButton);
    } else {
      setClassButton("false");
      setNextButtonClass("false");

      console.log(classButton);
    }
  }

  // function handleKeypress(e) {
  //   console.log("keypress");
  //   if (e.keyCode === 13) {
  //     console.log("enter pressed");
  //     handleClick();
  //   }
  // }
  return (
    <div className="level2">
      <section className="question">
        <h1>Now, to start the engine you have to enter the right password:</h1>
        <h3>
          If you have used the old phone with the numeric keyboard, you can find
          the number which is hidden in the word "PASSWORD"
        </h3>

        <input
          className="password"
          id="password"
          onChange={handleChange}
          value={inputValue}
          type="number"
          placeholder="Enter your password"
        ></input>
      </section>

      <button
        className="password-button"
        type="submit"
        id="myBtn"
        onClick={handleClick}
      >
        Submit
      </button>
      <section>
        <h3 className={classButton}>You have entered the right password</h3>
        <Link to="/fly">
          <button className={nextButtonClass}>Fly Back Home</button>
        </Link>
      </section>
    </div>
  );
};

export default Level2;
