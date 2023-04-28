import React, {useState} from "react"
import { Avatar, Card, CardHeader, IconButton, CardContent, Typography, Box, CardActions, Snackbar, Alert, Button} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import DeleteIcon from '@mui/icons-material/Delete';
import { postDelete } from "../api-helpers/helpers";
const Diaryitem=({title, description, image, location, date, id, user}) =>{
  const [open, setOpen]= useState( false);
  const  isLoggedInUser =() =>{
    if(localStorage.getItem("userId") === user._id){
      return true;
    }
    else{
      return false;
     }    
    };

    const handleDelete =() =>{
      postDelete(id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      setOpen(true);
    };
    
    return  (<Card sx={{ width: "50%",
                        height: "60vh", 
                        margin:1,padding:1,
                         display:'flex',
                          flexDirection:"column",
                           boxShadow:"5px 5px 10px #ccc" }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
            {<LocationOnIcon />}
        </IconButton>
      }
      title={title}
      header={location}
      subheader={date}
    />
    <img
      height="194"
      src={image}
      alt={title}
    />
    <CardContent>
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
      <hr />
      <Box paddingTop={1} display="flex">
      <Typography width="150px" fontWeight={"bold"} variant="div">Harry Potter</Typography>
      <Typography paddingTop={1} variant="body2" color="text.secondary">
        {description}
      </Typography>
      </Box>
      
    </CardContent>

    {/* {isLoggedInUser() && (
      <CardActions sx={{marginLeft:"auto"}}>
      <IconButton 
      LinkComponent={Link} to={`http://localhost:3000/post/${id}`}
       color="warning"><AutoFixNormalIcon/></IconButton>
      <IconButton color="error"><DeleteIcon /></IconButton>
     </CardActions>
    )
      
    } */}
     <CardActions sx={{marginLeft:"auto"}}>
      <IconButton 
      LinkComponent={Link} to={`/post/${id}`}
       color="warning"><AutoFixNormalIcon/></IconButton>
      <IconButton onClick={handleDelete} color="error"><DeleteIcon /></IconButton>
     </CardActions>
    <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
      <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
      This is a success message!
      </Alert>
     </Snackbar>

  </Card>);

};

export default Diaryitem;