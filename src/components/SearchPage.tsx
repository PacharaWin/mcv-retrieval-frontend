import React from 'react';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchTranscript } from '@/api/search';
import SearchResultCard from './SearchResultCard';

interface SearchPageProps {
    player: any;
}
const SearchPage: React.FC<SearchPageProps> = ({player}) => {


    const [transcript, setTranscript] = React.useState([]); 
    
    const [query, setQuery] = React.useState(''); // [1
    const handleSearch = async () => {
        // Add your search logic here

		const res = await SearchTranscript(
            {
                transcript_id: '1',
                filename: 'class1',
                query: query
            }
        );

        console.log(res);
        if(res){
            setTranscript(res);
        }

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
                onChange={(e) => setQuery(e.target.value)} />
            <Button onClick={handleSearch} sx={{height:55,width:55}}>
                <SearchIcon />
            </Button>

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