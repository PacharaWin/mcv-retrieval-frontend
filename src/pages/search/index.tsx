import React from 'react';
import { TextField, Button } from '@mui/material';

const SearchPage: React.FC = () => {
    const handleSearch = () => {
        // Add your search logic here
    };

    return (
        <div>
            <TextField label="Search" variant="outlined" />
            <Button variant="contained" onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default SearchPage;