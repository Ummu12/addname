import React from "react";
import { Link } from "react-router-dom";
import { Button,Grid } from "@mui/material";
import { Navitem } from "./Navitem";

export const Nav=()=>{
   return(
       <Grid container spacing={2}>
            <Navitem xs={2} path={"/"} title="Home"/>
            <Navitem  xs={2}  path={"/School"}  title="school" />
            <Navitem  xs={2}   path={"/Office"} title="Office"/>
            <Navitem  xs={3}  path={"/Tajmahal"} title="Tajmahal"/>
            <Navitem  xs={3}  path={"/Charminar"} title="Charminar"/>
       </Grid>
   )

}