// Your component file

import { useEffect, useState } from 'react';

function YourComponent() {
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        async function fetchVideoDetails() {
            const response = await fetch('/api/videodetail',);
            const data = await response.json();
            setVideoDetails(data);
        }
        fetchVideoDetails();
    }, []);

    return (
        <div>
            {/* <h1>Video Details</h1> */}
            <p>{JSON.stringify(videoDetails, null, 2)}</p>
        </div>
    );
}

export default YourComponent;