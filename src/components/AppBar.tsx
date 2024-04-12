import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
export default function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:'white'}}>
            <Toolbar>
                <Image
                    src="/mcvicon.jpeg"
                    alt="Logo of MyCourseVille"
                    width={300}
                    height={70}
                />
            </Toolbar>
        </AppBar>
        
    </Box>
  );
}