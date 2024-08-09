import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <img src={image} alt="I made this" />
    <p>Welcome to our website!. You can call me Jimmy</p>
  </div>;
}

export default About;
