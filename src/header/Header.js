import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import HikingIcon from '@mui/icons-material/Hiking'; 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const linksArr = ["home","diaries","auth"];
const loggedInLinks =["home", "diaries","auth", "add", "place"];
const Header = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  const [value, setValue] = useState();
    return <AppBar sx={{ bgcolor: "gray", position:'sticky'}}>
    <Toolbar>
      <HikingIcon/>
      <Tabs value={value} onChange={(e,val) =>setValue(val)} sx={{ml :"auto",textDecoration: "none"}}>
      {isLoggedIn ? 
      loggedInLinks.map((link) => (
        <Tab  LinkComponent={Link}
            to={`/${link==="home" ? "" :link}`}
            sx ={{textDecoration: "none",
        ":hover":
        {textDecoration: "underline",
        textUnderlineOffset: "7px",
      },
    }}
       key={link} label={link}/>
      ))
      : linksArr.map((link) => (
          <Tab  LinkComponent={Link}
              to={`/${link==="home" ? "" :link}`}
              sx ={{textDecoration: "none",
          ":hover":
          {textDecoration: "underline",
          textUnderlineOffset: "7px",
        },
      }}
         key={link} label={link}/>
        ))}
      </Tabs>
    </Toolbar>
  </AppBar>
};
export default Header;