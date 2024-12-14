import React from "react";
import classes from "./HomeText.module.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/1222.jpg";

export default function HomeText() {
  return (
    <div className={classes.text}>
      <div className={classes.textimg}>
        <div>
          <h1>Matan Ben Zahav</h1>
          <h4>Composer | Creator | Lecturer</h4>
        </div>
        <img
          alt="_2077"
          data-src={img1}
          height="150"
          src={img1}
          className="lazyload"
        />
      </div>
      <h4>here you can find and everything about Matan's music world</h4>
      <p>
        for reading about Matan press
        <Link to="/about" className={classes.link}>
          here
        </Link>
      </p>
    </div>
  );
}
