import { Box, Button  } from "@mui/material";
import CustomAppBar from "./AppBar";
import { Grid } from "@mui/material";
import MyTabBar from "./TabBar";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";  // Import useNavigate hook



const Home = ({ course,videoId, videoName, uploader, start_time,transcript_id,filename }: any = {}) => {
    //State
    // const navigate = useNavigate(); 
    // const handleButtonClick = () => {
    //     navigate("/embed");  // Navigate to /embed route
    // };
    
    const [player, setPlayer]:any = useState({});
    return (
        <Box>
        <CustomAppBar />
        <Grid container spacing={0}>  {/* Removed grid spacing to minimize spacing between grid items */}
            <Grid item xs={7} sx={{ paddingRight: 0 }}> {/* Reduced padding on the right side */}
                {/* Left column content */}
                <VideoPlayer
                    videoId={videoId}
                    videoName={videoName}
                    uploader={uploader}
                    setPlayer={setPlayer}
                    start_time={start_time}
                />
            </Grid>
            <Grid item xs={5} sx={{ paddingLeft: 0 }}> {/* Reduced padding on the left side */}
                {/* Right column content */}
                <MyTabBar player={player} transcript_id={transcript_id} filename={filename} course={course} />
            </Grid>
        </Grid>
            {/* Button at the bottom of the page */}
            <Box sx={{ mt: 2, textAlign: "center" }}> {/* Margin-top for spacing and center alignment */}
                <Link href="/embed/" passHref> {/* Use the Link component to specify the route */}
                    <Button variant="contained" color="primary">
                        Go to /embed
                    </Button>
                </Link>
            </Box>
    </Box>
    );
}

export default Home;
