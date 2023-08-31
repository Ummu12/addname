import React from "react";
import { Card,CardContent } from "@mui/material";
import { Landing } from "./Component/Landing";
import { Addname } from "./Component/Addname";

function App() {
  return (
    //  <Card>
    //   <CardContent>
    //    < Landing/>
    //   </CardContent>
    //  </Card>

    <Card>
      <CardContent>
        
      <Addname />
      </CardContent>
    </Card>
  );
}

export default App;
