import React from "react";
import classes from "./HomeText.module.css";
import { Link } from "react-router-dom";

export default function HomeText() {
  return (
    <div className={classes.text}>
      <h1>Welcome to the music website of Matan Ben Zahav</h1>
      <h4>
        here you can find all Matan's Music and everything about Matan's music
      </h4>
      <p>
        for reading about Matan press
        <Link to="/about" className={classes.link}>
          here
        </Link>
      </p>
    </div>
  );
}