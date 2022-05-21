import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../components/drawer";
import logo from "../img/logo.png";
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: "#0A101A",
  },
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
  },
  navBarLogo: {
    cursor: "pointer",
    width: "120px",
    height: "30.67px",
    margin: "2% 0 0 4%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight:'bold',
    textTransform:'uppercase',
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "#EE5B31",
      borderBottom: "1px #EE5B31",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className={classes.navBar} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img className={classes.navBarLogo} src={logo} alt="Logo" />
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link} activeClassName={"active"}>
              Home
            </Link>
            <HashLink to="/#how" className={classes.link}>
              How it works
            </HashLink>
            <Link to="/social" className={classes.link}>
              Social
            </Link>
            {/* <Link to="/support" className={classes.link}>
              Support
            </Link> */}
            {/* <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
