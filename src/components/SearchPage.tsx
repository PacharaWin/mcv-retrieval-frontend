import React from 'react';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchTranscript } from '@/api/search';
import SearchResultCard from './SearchResultCard';
const SearchPage: React.FC = () => {


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
                    <SearchResultCard key={index} start_time={item.start_time} stop_time={item.stop_time} text={item.text} />
                ))}
            </div>


        </div>
    );
};

export default SearchPage;