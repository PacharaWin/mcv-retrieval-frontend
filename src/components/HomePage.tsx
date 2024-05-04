import { Box, Button  } from "@mui/material";
import CustomAppBar from "./AppBar";
import { Grid } from "@mui/material";
import MyTabBar from "./TabBar";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

export default function Home() {

    //State
    const [player, setPlayer]:any = useState({});
    return (
        <Box>
            <CustomAppBar />
            <Grid container>
                <Grid item xs={8}>
                    {/* Left column content */}
                    <VideoPlayer 
                    videoId="b0tmxvX5YNg"
                    videoName="1/2566 CEM II - 7 Aug 2023 - L01 Part I Signals"
                    uploader="Punnarai Siricharoen"
                    setPlayer={setPlayer}
                    start_time={0}
                    />
                </Grid>
                <Grid item xs={4} style={{ width: 400 }}>
                    {/* Right column content */}
                    <MyTabBar player={player} />
                </Grid>
            </Grid>
        </Box>
    );
}
