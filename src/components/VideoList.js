import React from "react";

import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const { videos, onVideoSelect } = props;
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} video={video} key={id} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
