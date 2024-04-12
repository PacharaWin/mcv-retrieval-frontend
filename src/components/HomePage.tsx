import { AppBar, Box } from "@mui/material";
import CustomAppBar from "./AppBar";

export default function Home() {
    return (
        <Box>
            <CustomAppBar />
            <h1>Welcome to MyCourseVille!</h1>
        </Box>
    );
}