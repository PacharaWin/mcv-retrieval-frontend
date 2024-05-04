import HomePage from "@/components/HomePage";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Lecture = () => {
    const router = useRouter();
    const { course, id } = router.query;
    const [isLoading, setLoading] = useState(true);
    const [videoId, setVideoId] = useState('');
    const [videoName, setVideoName] = useState('');
    const [uploader, setUploader] = useState('');
    const [transcript_id, setTranscript_id] = useState('');
    const [filename, setFilename] = useState('');

    useEffect(() => {
        async function fetchVideoDetails(course: string, id: string) {
            if(!router.isReady) return;
            const response = await fetch(`/api/videodetail?course=${course}&id=${id}`);
            console.log(response);
            const data = await response.json();
            setVideoId(data.videoId);
            setVideoName(data.videoName);
            setUploader(data.uploader);
            setTranscript_id(data.transcript_id);
            setFilename(data.filename);
            setLoading(false);

        }

        console.log(course, id);
        fetchVideoDetails(course as string, id as string);
    }, [router.isReady]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!videoId) {
        return <div>Video not found</div>;
    }
    return (
        <HomePage 
            videoId={videoId}
            videoName={videoName}
            uploader={uploader}
            transcript_id={transcript_id}
            filename={filename}
        />

    );
};

export default Lecture;