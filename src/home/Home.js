import React from "react";
import {Box} from "@mui/system";
import { Button, Link, Typography } from "@mui/material";
// import { NavLink, useLinkClickHandler } from "react-router-dom";
const Home=() =>{
    return <Box position = {"relative"} width="100%" height="90vh">
        <img src="/road.jpg" alt="road" width={"100%"} height="70%"/>
        <Typography 
            fontFamily={'Satisfy'}
            fontWeight="bold"
            variant="h3"
            textAlign={"center"}
            width="100%"
            sx={{position: "absolute", top: "0px"}}>
            The Journey of a thousand miles begins with a single step
        </Typography>
        <Box   width="100%" height ="30%" display={"flex"} flexDirection="column">
            <Typography fontFamily ={'Lobster Two'} textAlign={"center"} variant="h4" padding={4}>
                Share Your Travel Diary With Us
            </Typography>
            <Box margin="auto">
                <Button  variant="outlined" sx={{ mr: 2 }}>Share Your Story</Button>
                <Button LinkComponent={Link} to = "/diaries" variant="contained" sx={{ mr: 2 }}>View Diaries</Button>
            </Box>
             </Box>
 
    </Box>
};

export default Home;