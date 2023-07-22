import React from "react";
import Title from "../components/Title";
import {Typography} from "@mui/material"

function InitialPage() {
return <>
  < Title title={"The Star Wars API Inspector"} />
  <span className="p-6" />
    <Typography variant="body1">Head over the different sections to navigate the API!</Typography>
  </>
}

export default InitialPage