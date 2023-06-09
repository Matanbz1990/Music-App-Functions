import classes from "./Contact.module.css";
import SecondImg from "../assets/images/SecondImg.jpg";
import loading from "../assets/images/loading.png";
import Spotify_icon from "../assets/images/Spotify_icon.svg.png";

import {
  MailOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const imgStyle = {
  width: "20rem",
  height: "30rem",
  margin: "auto",
};
export default function About() {
  return (
    <div>
      <h1>Contact details</h1>
      <div className={classes.contactText}>
        <img
          style={imgStyle}
          alt="profileImage"
          data-src={SecondImg}
          width="400"
          src={loading}
          //   height="200"
          className="lazyload"
        />
        <div>
          <h2>
            <MailOutlined />
            Matanbz95@gmail.com
          </h2>
          <h2>
            <WhatsAppOutlined />
            +972-524615296
          </h2>
          <h2>
            <a
              className={classes.link}
              href=" https://www.linkedin.com/in/matan-ben-zahav-470a16215"
            >
              <LinkedinOutlined />
              Linkedin
            </a>
          </h2>
          <h2>
            <a
              className={classes.link}
              href="https://www.facebook.com/profile.php?id=100002428477766"
            >
              <FacebookOutlined />
              Facebook
            </a>
          </h2>
          <h2>
            <a
              className={classes.link}
              href="https://www.youtube.com/channel/UCFdlFD157cG4O8CBC5zZ88g"
            >
              <YoutubeOutlined />
              Youtube
            </a>
          </h2>
          <h2>
            <div>
              <a
                className={classes.link}
                href="https://open.spotify.com/artist/6q2fZsJksGnsh2KZXmS7sZ?si=1GNxnGCzQmat04DlBo8LKA"
              >
                <img
                  alt="_2077"
                  data-src={Spotify_icon}
                  height="20"
                  src={loading}
                  className="lazyload"
                />
                Spotify
              </a>
            </div>
          </h2>
        </div>
      </div>
      {/* <div className={classes.contactText}>
        <h4></h4> */}
      {/* <img alt="profileImage" src={secondImage} width="500" height="300" /> */}
      {/* </div> */}
    </div>
  );
}
