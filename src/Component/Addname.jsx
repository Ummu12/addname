
import React,{useState} from "react";
import { Card,CardContent,Grid,TextField,Button } from "@mui/material";




export const Addname=()=>{

    const [txt,setTxt]=useState("")
    const [show,setShow]=useState("")

    const handleSend=()=>{
        sessionStorage.setItem("name",txt)
    }

    const handleReceive=()=>{
       const result= sessionStorage.getItem("name")
       setShow(result)
    }

    return(
     
        <Grid container spacing={3}>
        <Grid item xs={8}>
  <TextField   onChange={(e)=>setTxt(e.target.value)}
   fullWidth  variant="outlined" label="Addname"  />
        </Grid>

        <Grid item xs={2}>
         <Button  onClick={handleSend}
         variant="contained" fullWidth>
            Send
         </Button>
        </Grid>

        <Grid item xs={2}>
         <Button  onClick={handleReceive}
          variant="contained" fullWidth>
            Receive
         </Button>
        </Grid>
        
        <Grid item xs={12}>
          <h1>{show}</h1>
        </Grid>

     </Grid>
   
    )
}