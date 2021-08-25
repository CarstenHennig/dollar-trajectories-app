import React from "react"
import Video from "./images/dollarHistory.mp4"
 import '../App.css';

  function VideoPlayer() {
    /* return (
      <div className="VideoPlayer">
        <h1>Video Player Here</h1>
          <video width="100" controls autostart autoPlay src={Video} type="video/mp4" />
      </div>
    ); */

    return <video className="VideoPlayer" controls autostart autoPlay src={Video} type="video/mp4"/ >
  }

  export default VideoPlayer; 