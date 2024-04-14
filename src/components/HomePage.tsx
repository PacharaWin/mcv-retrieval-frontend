import { AppBar, Box, Typography } from "@mui/material";
import CustomAppBar from "./AppBar";
import { Grid } from "@mui/material";
import MyTabBar from "./TabBar";
import VideoPlayer from "./VideoPlayer";

export default function Home() {
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
                    />
                </Grid>
                <Grid item xs={4} style={{ width: 400 }}>
                    {/* Right column content */}
                    <MyTabBar />
                </Grid>
            </Grid>
        </Box>
    );
}
