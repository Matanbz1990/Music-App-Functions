import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import RoundedNatural from "../assets/images/RoundedNatural.png";
import { AuthContext } from "../store/AuthProvider";
import UploadTrack from "../components/UploadTrack";
import { AudioContext } from "../store/AudioProvider";
import { PauseCircleOutlined } from "@ant-design/icons";
import classes from "./Header.module.css";
export default function Header() {
  const [showUpload, isShowUpload] = useState(false);
  const audioCtx = useContext(AudioContext);
  const { logout, currentUser } = useContext(AuthContext);

  // const imgStyle = {
  //   width: "50px",
  //   height: "50px",
  //   margin: "auto",
  //   marginLeft: "5px",
  // };

  const handleShowUpload = () => {
    isShowUpload(!showUpload);
  };

  const pauseSound = () => {
    audioCtx.pauseAudio();
  };

  return (
    <div className={classes.header}>
      <div className={classes.titleAndLinks}>
        <Link to={"/"} className={classes.link}>
          <img
            alt="profileImage"
            src="Logo.png"
            width="50"
            height="40"
            className={classes.headerImg}
          />
        </Link>
        <Link to="/" className={classes.link}>
          <h3>Matan Music</h3>
        </Link>
        <Link to="/about" className={classes.link}>
          <h3>About</h3>
        </Link>
        <Link to="/posts" className={classes.link}>
          <h3>Posts</h3>
        </Link>
        <Link to="/contact" className={classes.link}>
          <h3>Contact</h3>
        </Link>
        <Link to="https://matanmusic.com/" className={classes.link}>
          <h3>Hebrew Official Website</h3>
        </Link>
      </div>
      {audioCtx.isPlaying && (
        <div className={classes.nowPlayingTitle}>
          <h3 className={classes.nowPlayingHeaderText}>Now playing:</h3>
          <div className={classes.nowPlayingHalfText}>
            <img
              alt="non"
              src={audioCtx.trackImgUrl}
              className={classes.trackImg}
              // style={imgStyle}
            />
            <h1 className={classes.nowPlayingHeaderTitle}>
              "{audioCtx.trackTitle}"
            </h1>
          </div>
          <div className={classes.artistAndPause}>
            <h3 className={classes.nowPlayingHeaderText}>
              by {audioCtx.trackArtist}
            </h3>

            <PauseCircleOutlined
              style={{ fontSize: "150%", marginLeft: "20px" }}
              className={classes.pauseIt}
              onClick={pauseSound}
            />
          </div>
        </div>
      )}

      {!currentUser && (
        <div className={classes.adminButton}>
          <Link to="/login">
            <Button>Admin Sign-in</Button>
          </Link>
        </div>
      )}
      {currentUser && (
        <div>
          <Button onClick={logout}>Logout</Button>
          <Button onClick={handleShowUpload}>upload new track</Button>
        </div>
      )}
      {showUpload && <UploadTrack handleShowUpload={handleShowUpload} />}
    </div>
  );
}
