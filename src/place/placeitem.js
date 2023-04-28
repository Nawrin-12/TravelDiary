
//  import {Card, ExpandMore,CardHeader,Avatar,IconButton, CardMedia, CardContent, Typography, ShareIcon,CardActions,Button} from "@mui/material";

import { CardMedia,Avatar, Card, CardHeader,CardContent, Typography} from "@mui/material";

import SendIcon from '@mui/icons-material/Send';
import ExpandIcon from '@mui/icons-material/Expand';

const Placeitem=() =>{
    return  ( 
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Rome"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="Rome.jpg"
        alt="Rome"
      />
        <CardContent>
          <Typography paragraph>
          When you visit the Eternal City, prepare to cross a few must-see attractions
       –  including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. 
          Travelers can see additional treasures, such as St. Peter's Basilica and the Sistine Chapel,
          in nearby Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone
          streets of Trastevere, or head to Mercato Centrale Roma to sample local delicacies like gelato
          and pizza. Before leaving, peruse some of Rome's lesser-known museums, art galleries and boutiques.

          </Typography>
        </CardContent>

        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
            R
          </Avatar>
        }
        title="South Island, Newzealand"
        subheader="September 12, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="south island.jpg"
        alt="South Island"
      />
        <CardContent>
          <Typography paragraph>
          New Zealand's South Island brims with majestic landscapes at every turn,from dramatic
          mountains to spectacular fjords. Here, you can admire the mountains of Fiordland National
          Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night,
          journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies.
          You can also indulge your inner daredevil in Queenstown (a favorite destination among bungee 
          jumpers), sample delicious sauvignon blanc wine in the Marlborough region or explore New Zealand's
          most accessible glaciers – Franz Josef and Fox Glacier – on the island's west coast.


          </Typography>
        </CardContent>
    </Card>

    

    
    );

};

export default Placeitem;







