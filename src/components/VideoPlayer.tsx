import { Typography } from '@mui/material';
import React from 'react';
import YouTube from 'react-youtube';
interface VideoPlayerProps {
    videoId: string;
    videoName: string;
    uploader: string;
    setPlayer: any;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId,videoName,uploader,setPlayer }) => {
    
    const opts ={
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    }
    var player:any = null;

    const _onReady = (event:any) => {
        player = event.target;
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