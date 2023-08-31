import React from "react";
import { Card,CardContent,Grid,Button } from "@mui/material";

export const Cricket=()=>{

    const handleSend=(item)=>{
 sessionStorage.setItem('data',item)
    }

    const receive=()=>{
  sessionStorage.getItem('data')
    }

    return(
      <Card>
        <CardContent>
            <Grid container spacing={3}>
            <Grid item xs={4}> </Grid>
             
             <Grid item xs={4}>
                { JSON.parse (receive) ?
              <img src="./img/bat.jpg" width={250} alt="" />
             :
             <img src="./img/ball.jpg" width={250} alt="" />
                }
             </Grid>
             <Grid item xs={4}> </Grid>
        
          <Grid item xs={6}>
           <Button onClick={()=>handleSend(true)}
            variant="contained" fullWidth>
           Ball
           </Button>
          </Grid>
  
          <Grid item xs={6}>
           <Button onClick={()=>handleSend(false)}
            variant="contained" fullWidth>
           Ball
           </Button>
          </Grid>


            </Grid>

        </CardContent>
      </Card>
    )
}