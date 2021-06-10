import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./fly.css";

function Fly() {
  return (
    <div className="fly">
      <section className="question">
        <h1>Goodbye to your planet!!</h1>
      </section>

      <button
        className="finalButton"
        onclick="window.parent.postMessage('nextLevel')"
      >
        Next Level
      </button>
    </div>
  );
}

export default Fly;
