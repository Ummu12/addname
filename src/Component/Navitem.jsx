import React from "react";
import { Button,Grid} from "@mui/material";
import { Link } from "react-router-dom";


export const Navitem=({xs,title,path})=>{
     return(
       <Grid item xs={xs}>
         <Link to={path}>
        
           <Button 
           variant="contained" fullWidth color="secondary">
              {title}
           </Button>
         </Link>
       </Grid>
     )
}