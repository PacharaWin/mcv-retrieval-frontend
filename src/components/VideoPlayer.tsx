import { Typography } from '@mui/material';
import React from 'react';

const VideoPlayer: React.FC<{ videoId: string ,videoName:string, uploader:string}> = ({ videoId,videoName,uploader }) => {
    return (
        <div>
            <iframe
                width="850"
                height="500"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <Typography variant="h4">{videoName}</Typography>
            <Typography variant="body1">by {uploader}</Typography>

        </div>
    );
};

export default VideoPlayer;