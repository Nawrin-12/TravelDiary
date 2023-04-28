import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { getPostDetails, postUpdate } from "../api-helpers/helpers";
import {Box, Button, FormLabel, TextField, Typography} from "@mui/material";

const DiaryUpdates =() =>{
    const [post, setPost]=useState();
    const [inputs, setInputs]= useState( {title: "",
    description: "",
     location:"",
      imageUrl:""
    });

    const id = useParams().id;
    console.log(id);
    useEffect(() => {
        getPostDetails(id)
        .then((data)=>{
            setPost(data.post)

            setInputs({
                title: data.post.title,
                description: data.post.description,
                imageUrl: data.post.image,
                loctation:data.post.location,
            })
        })
        .catch((err) => console.log(err));

    },[id]);

   
    const handleChange =(e) =>{
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        postUpdate(inputs,id)
        .then((data) => console.log(data))
        .catch(err=>console.log(err));
                };
    return (
    <Box display="flex" flexDirection={"column"} width="100%" height ="100%">
    <Box display="flex" margin="auto" padding={2}> 
   
    <Typography variant="h4" fontFamily={"dancing script"}>
      Add Your Travel Diary
    </Typography>
    <ConnectingAirportsIcon sx={{fontSize: '40px', paddingLeft:1,color:"lightcoral"}}  />
    </Box>
    {post && (<form onSubmit={handleSubmit}>
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
            <Button 
              type="submit"
              color="warning"
              variant="contained"
              sx={{width:"50%", margin:"auto", mt:2, borderRadius: 7}}
             
            >Post</Button>

          </Box>
    </form>)}
    </Box>)
    
};

export default DiaryUpdates;