import React, {useState} from "react"
import {Box, Button, FormLabel, TextField, Typography} from "@mui/material"
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { addPost } from "../api-helpers/helpers";
const Add =() =>{
    const [inputs, setInputs]= useState( {title: "", description: "", location:"", imageUrl:"",date:""});
    const handleChange =(e) =>{
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addPost(inputs)
           .then((res)=>console.log(res))
           .catch((err)=>console.log(err));
                };
    return (
    <Box display="flex" flexDirection={"column"} width="100%" height ="100%">
    <Box display="flex" margin="auto" padding={2}> 
   
    <Typography variant="h4" fontFamily={"dancing script"}>
      Add Your Travel Diary
    </Typography>
    <ConnectingAirportsIcon sx={{fontSize: '40px', paddingLeft:1,color:"lightcoral"}}  />
    </Box>
    <form onSubmit={handleSubmit}>
        <Box 
        padding={3} 
        margin="auto" 
        display="flex"  
        flexDirection={"column"}
        >
            <FormLabel >Title</FormLabel>
            <TextField 
            onChange={handleChange}
            name="title"
            value={inputs.title}
            variant="filled" 
            margin="normal"/>
            <FormLabel>Description</FormLabel>
            <TextField 
            onChange={handleChange}
            name="description"
            value={inputs.description}
            variant="filled" 
            margin="normal"/>
            <FormLabel>Image URL</FormLabel>
            <TextField 
            onChange={handleChange}
            name="imageUrl"
            value={inputs.imageUrl}
            variant="filled" 
            margin="normal"/>

            <FormLabel>Location</FormLabel>
            <TextField 
            onChange={handleChange}
            name="location"
            value={inputs.location}
            variant="filled" 
            margin="normal"/>
            <FormLabel>Date</FormLabel>
            <TextField 
            type="date"
            onChange={handleChange}
            name="date"
            value={inputs.date}
            variant="filled" 
            margin="normal"
            />
            <Button 
              type="submit"
              color="warning"
              variant="contained"
              sx={{width:"50%", margin:"auto", mt:2, borderRadius: 7}}
             
            >Post</Button>

          </Box>
    </form>
    </Box>)
};

export default Add;