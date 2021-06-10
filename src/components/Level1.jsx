import "./Level1.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const initialStae = {
  class1: "answer",
  class2: "answer",
  class3: "answer",
  class4: "answer",
};

const Level = (props) => {
  const [classButton, setClassButton] = useState(initialStae);
  const [typeComplete, setTypeComplete] = useState(false);
  return (
    <div className="level1">
      <div className="display">
        <section className="question">
          <section className="Type-text">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "<h1>To unlock the door you must get code which is there in the sequence.</h1>"
                  )
                  .callFunction(() => {
                    setTypeComplete(true);
                  })
                  .start();
              }}
            />
          </section>
          {typeComplete ? (
            <div>
              <p>
                "Code is the next number in the sequence. Press the right number
                and unlock the door"
              </p>
              <h3>4, 9, 16, 25, ?</h3>
            </div>
          ) : null}
        </section>
        <div>
          <button
            className="buttons"
            onClick={() => {
              let newClass = { ...initialStae };
              if (classButton.class1 === "answer") {
                newClass.class1 = "right-answer";
              } else if (classButton.class1 === "right-answer") {
                newClass.class1 = "answer";
              }

              setClassButton(newClass);
            }}
          >
            36
          </button>
          <button
            className="buttons"
            onClick={() => {
              let newClass = { ...initialStae };
              if (classButton.class2 === "answer") {
                newClass.class2 = "else";
              } else if (classButton.class2 === "else") {
                newClass.class2 = "answer";
              }

              setClassButton(newClass);
            }}
          >
            30
          </button>
          <button
            className="buttons"
            onClick={() => {
              let newClass = { ...initialStae };
              if (classButton.class3 === "answer") {
                newClass.class3 = "else";
              } else if (classButton.class3 === "else") {
                newClass.class3 = "answer";
              }

              setClassButton(newClass);
            }}
          >
            18
          </button>
          <button
            className="buttons"
            onClick={() => {
              let newClass = { ...initialStae };
              if (classButton.class4 === "answer") {
                newClass.class4 = "else";
              } else if (classButton.class4 === "else") {
                newClass.class4 = "answer";
              }

              setClassButton(newClass);
            }}
          >
            2
          </button>
        </div>

        <div className={classButton.class1}>
          <p className="jawab">
            Woww!! You have unlocked the door, but you are not fully done yet.
            You need to find the Password to start the Engine.
          </p>
          <Link to="/level2">
            <button className="answer-button">
              TRY PASSWORD TO START THE ENGINE
            </button>
          </Link>
        </div>
        <div className={classButton.class2}>
          <p className="jawab">
            You are thinking in the right direction but the answer is not right
          </p>
        </div>
        <div className={classButton.class3}>
          <p className="jawab">
            Think of a bigger number and remember you have limited number of
            choices
          </p>
        </div>
        <div className={classButton.class4}>
          <p className="jawab">
            How can you even think that the answer can be 2. I am looking to
            lock you on this plannet for next 2000 years. //Alien is Super Angry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Level;
