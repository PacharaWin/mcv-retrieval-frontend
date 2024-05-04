import { Box, Button  } from "@mui/material";
import CustomAppBar from "./AppBar";
import { Grid } from "@mui/material";
import MyTabBar from "./TabBar";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";


const Home = ({ videoId, videoName, uploader, start_time,transcript_id,filename }: any = {}) => {
    //State
    
    const [player, setPlayer]:any = useState({});
    return (
        <Box>
            <CustomAppBar />
            <Grid container>
                <Grid item xs={8}>
                    {/* Left column content */}
                    <VideoPlayer 
                    videoId={videoId}
                    videoName={videoName}
                    uploader={uploader}
                    setPlayer={setPlayer}
                    start_time={start_time}
                    />
                </Grid>
                <Grid item xs={4} style={{ width: 400 }}>
                    {/* Right column content */}
                    <MyTabBar player={player} transcript_id={transcript_id} filename={filename}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
