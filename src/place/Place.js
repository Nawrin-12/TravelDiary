
import {Box} from "@mui/system";
import Placeitem from "./placeitem";


const Place=() =>{

    return  ( <Box 
    display="flex" 
    flexDirection={"column"} 
    padding={1} 
    justifyContent="center" 
    alignItems={"center"}>
        <Placeitem/>
    </Box> 
    );


};


export default Place;