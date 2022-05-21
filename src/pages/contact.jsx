import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const ContactPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialMainDiv}>
      <Grid>
        <Typography>This is contact page</Typography>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  socialMainDiv: {},
}));

export default ContactPage;
