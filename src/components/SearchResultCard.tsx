import { Card, Typography } from "@mui/material";


export default function SearchResultCard(searchResult: {start_time:string,stop_time:string, text:string}) {
    const trunc_time = searchResult.start_time.split(' ')[1].substring(0,8);
    const trunc_text = searchResult.text.length > 200 ? searchResult.text.substring(0,100) + "..." : searchResult.text;
    return (
    <Card variant="outlined" style={{ marginTop:'5px' }}>
        <Typography variant="h6">{trunc_time}</Typography>
        <Typography variant="h6">{trunc_text}</Typography>
    </Card>
    )
}