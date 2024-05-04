import { Typography } from '@mui/material';
import React from 'react';
import YouTube from 'react-youtube';
interface VideoPlayerProps {
    videoId: string;
    videoName: string;
    uploader: string;
    setPlayer: any;
    start_time?: number;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, videoName, uploader, setPlayer, start_time = 0 }) => {
    
    const opts ={
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            start: start_time,
        },
    }

    const _onReady = (event:any) => {
        const player = event.target;
        console.log(player);
        setPlayer(player);
    }

    
    return (
        <div>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady}/>
            <Typography variant="h4">{videoName}</Typography>
            <Typography variant="body1">by {uploader}</Typography>
            {/* <Button variant="contained" color="primary" onClick={onclick}>Jump to 30 minutes</Button> */}
        </div>
    );
};

export default VideoPlayer;