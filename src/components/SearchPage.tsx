import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchTranscript } from '@/api/search';
import SearchResultCard from './SearchResultCard';

interface SearchPageProps {
    player: any;
    transcript_id: string;
    filename: string;
}
const SearchPage: React.FC<SearchPageProps> = ({player,transcript_id,filename}) => {


    const [transcript, setTranscript] = React.useState([]); 
    const [isLoading, setIsLoading] = React.useState(false);
    
    const [query, setQuery] = React.useState(''); // [1
    const handleSearch = async () => {
        // Add your search logic here
        setIsLoading(true);
        setTranscript([]);

		const res = await SearchTranscript(
            {
                transcript_id: transcript_id,
                filename: filename,
                query: query
            }
        );

        console.log(res);
        if(res){
            setTranscript(res);
        }
        setIsLoading(false);
    };

    function handleResultCardClick(start_time: string) {
        if (!player) {
            return;
        }
        const trunc_time = start_time.split(' ')[1].substring(0,8);
        const myArray = trunc_time.split(':');
        const seconds = (+myArray[0]) * 3600 + (+myArray[1]) * 60 + (+myArray[2]);
        player.seekTo(seconds);
    }

    return (
        <div>
            <TextField 
                label="Search" 
                variant="outlined" 
                sx={{width:300}} 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <Button onClick={handleSearch} sx={{height:55,width:55}}>
                <SearchIcon />
            </Button>

            {
                isLoading && 
                <Typography variant='h6'>
                    Loading...
                </Typography>
            }
            <div>
                {transcript.map((item: {start_time:string,stop_time:string, text:string}, index: number) => (
                    <div onClick={() => handleResultCardClick(item.start_time)} key={index}>
                        <SearchResultCard 
                            key={index} 
                            start_time={item.start_time} 
                            stop_time={item.stop_time} 
                            text={item.text} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;