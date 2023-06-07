import React from "react";
import classes from "./Track.module.css";

import Emoji from "./Emoji";
import AudioPlayer from "./AudioPlayer";
import CurrentPlayedData from "./CurrentPlayedData";
export default function Track(props) {
  const trackClasses = `${classes.trackDetailes} ${
    props.isPlaying ? classes.isPlayingClass : ""
  }`;
  const track = props.currentTrack;
  const imgBackground = {
    backgroundImage: `url(${track.imgUrl})`,
    backgroundSize: "auto",
    width: "95%",
    margin: "auto",
    marginTop: "10px",
    // border: "solid black 1px",
  };
  return (
    <div style={imgBackground}>
      <div className={trackClasses}>
        {track.imgUrl && (
          <div>
            <img
              alt="non"
              src={track.imgUrl}
              className={classes.trackImg}
              width="900"
              height="200"
            />
          </div>
        )}
        <AudioPlayer
          url={track.trackUrl}
          imgUrl={track.imgUrl}
          title={track.title}
          artist={track.artist}
          isPlaying={props.isPlaying}
          id={track._id}
          onPlay={props.onPlay}
        />
        <div className={classes.songAndArtist}>
          <div className={classes.titleAndDuration}>
            <h3>{track.title} </h3>
            <p>{track.duration}</p>
          </div>
          <p>{track.artist}</p>
        </div>
        <div className={classes.geners}>
          {track.genres.map((genre) => {
            return (
              <p key={genre} className={classes.item}>
                {genre}
              </p>
            );
          })}
        </div>
        <div className={classes.moods}>
          {track.moods.map((mood) => {
            return (
              <p key={mood} className={classes.item}>
                {mood}
              </p>
            );
          })}
        </div>
        <Emoji
          id={track._id}
          className={classes.trackEmojis}
          trackIsLiked={track.isLiked}
        />
      </div>
      {props.isPlaying && (
        <CurrentPlayedData
          className={`${classes.CurrentPlayedAudio} ${
            props.isPlaying ? "open" : ""
          }`}
          isPlaying={props.isPlaying}
          trackAbout={track.trackAbout}
        />
      )}
    </div>
  );
}
