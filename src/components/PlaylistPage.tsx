import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const PlaylistPage = ({course}: any) => {

    const [playlist, setPlaylist] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        async function fetchVideoDetails(course: string) {
            const response = await fetch(`/api/videodetail?course=${course}`);
            console.log(response);
            const data = await response.json();
            setPlaylist(data);

        }

        fetchVideoDetails(course);
    },[]); 
    return (
        <div>
            {Object.keys(playlist).map((key: string) => {
                return (
                    <Card sx={{margin:1,padding:2}}>
                        <a href={`/lecture/${course}/${key}`}>
                            <u><Typography color={'primary'}>{JSON.stringify(playlist[key].videoName)}</Typography></u>
                        </a>
                    </Card>
                )
            })}
        </div>
    );
}

export default PlaylistPage;