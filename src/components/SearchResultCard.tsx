import { Box, Card, Typography } from "@mui/material";


export default function SearchResultCard(searchResult: {start_time:string,stop_time:string, text:string}) {
    const trunc_time = searchResult.start_time.split(' ')[1].substring(0,8);
    const trunc_text = searchResult.text;
    return (
    <Card variant="outlined"
     style={{ marginTop:'5px', padding:'5px', cursor:'pointer'}}
      sx={{ "&:hover": { backgroundColor: 'lightgray' } }}>
        <Typography display='inline' variant="body2" color="dodgerblue">{trunc_time} </Typography>
        <Typography display='inline' variant="body2">
            {trunc_text}
        </Typography>
    </Card>
    )
}