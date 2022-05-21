import { Grid, makeStyles, Typography } from "@material-ui/core";
import aboutWave from "../img/aboutWave.svg";
import purpleLineRight from "../img/purpleLineRight.svg";
import purpleLineLeft from "../img/purpleLineLeft.svg";
import orangeDot from "../img/orangeDot.svg";
import teamPhoto from "../img/teamPhoto.jpg";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutGrid}>
      <Grid className={classes.firstGrid}>
        <Typography className={classes.aboutText}>About</Typography>
        <img src={aboutWave} className={classes.aboutWave} />
        <Grid className={classes.firstTextGrid}>
          <Typography className={classes.firstText}>
            WHERE GAMERS OF THE WORLD COME TOGETHER <br />
            TO SHAPE AND CREATE THE OPTIMAL GAMING EXPERIENCE
          </Typography>
          <Grid className={classes.rectangle}></Grid>
        </Grid>
      </Grid>
      <Grid className={classes.secondGrid}>
        <Grid container direction="column" className={classes.secondGridText}>
          <Typography className={classes.secondText}>
            OUR MISSION IS TO <br />
          </Typography>
          <img src={purpleLineRight} className={classes.purpleLineRight} />
          <img src={purpleLineLeft} className={classes.purpleLineLeft} />
          <Typography className={classes.secText}>
            {" "}
            <span className={classes.empower}> EMPOWER </span>the individual
            within the world of gaming.{" "}
          </Typography>
          <Grid className={classes.threeDots}>
            {" "}
            <img src={orangeDot} className={classes.orangeDot} />
            <img src={orangeDot} className={classes.orangeDot} />
            <img src={orangeDot} className={classes.orangeDot} />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.thirdGrid}>
        <Grid className={classes.thirdGridText}>
          <Grid>
            <Grid className={classes.purpleline}></Grid>
            <Typography className={classes.whatWeDo}>What we do.</Typography>
            <Typography className={classes.whatWeDoText}>
              JOYNR is taking a stand against the structure of <br />
              online gaming today and giving the power of
              <br />
              matchmaking to the player.
            </Typography>

            <Typography className={classes.whatWeDoText}>
              We are building a platform that eliminates the use <br />
              of ramdom matchmaking and allowing the player <br />
              to match up with the other players that share the <br />
              same qualities, ambitions and potentials.
            </Typography>
            <Grid className={classes.threeDots2}>
              {" "}
              <img src={orangeDot} className={classes.orangeDot} />
              <img src={orangeDot} className={classes.orangeDot} />
              <img src={orangeDot} className={classes.orangeDot} />
            </Grid>
          </Grid>
          <Grid className={classes.smallPurpleline}></Grid>
          <Grid className={classes.bigPurpleline}></Grid>
          <Typography className={classes.whoAreWe}>Who are we.</Typography>
        </Grid>
      </Grid>
      <Grid>
        <img src={teamPhoto} className={classes.teamPhoto} />{" "}
      </Grid>
      <Grid className={classes.lastGrid}>
        <Grid className={classes.lastGrid1}>
          <Typography className={classes.lastGridText}>
            <span className={classes.joynr}>JOYNR </span>is a group of gamers,
            athletes,
            <br />
            students, entrepreneurs, developers
            <br />
            and visionaries. <br />
            <br />
            We all come from different backgrounds
            <br />
            and posses different areas of expertise <br />
            but all share the common goal,{" "}
            <span className={classes.joynr}>
              to make a <br />
              difference.
            </span>
          </Typography>
        </Grid>
        <Grid className={classes.lastGrid2}>
          <Typography className={classes.lastGridText}>
            Our team share the same vision to <br />
            improve everyone's experience online. <br />
            <br />
            By combining the skill in the team and <br />
            shared ambition to make a change we are <br />
            dedicated to re-shape the experience of
            <br />
            gamers around the world. <br />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  aboutGrid: {
    // height:'3526px'
  },

  firstGrid: {
    // backgroundImage: "url(" + socialPurple + ")",
    backgroundColor: "black",
    height: "800px",
    backgroundRepeat: "no-repeat",
  },
  aboutText: {
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    paddingTop: "1em",
    paddingLeft: "2em",
    fontFamily: "DM Sans",
  },

  firstText: {
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    zIndex: "10000",
    fontFamily: "DM Sans",
  },
  firstTextGrid: {
    display: "flex",
    justifyContent: "center",
    zIndex: "10000",
    paddingTop: "15em",
    fontFamily: "DM Sans",
  },
  rectangle: {
    position: "absolute",
    left: "47.85%",
    right: "0%",
    top: "60.87%",
    bottom: "37.96%",
    zIndex: "10000",
    background: "#EE5B31",
  },
  aboutWave: {
    position: "absolute",
    width: "100vw",
    paddingTop: "",
    zIndex: "900",
  },

  secondGrid: {
    height: "436px",
    backgroundColor: "#0F1928",
  },
  secondGridText: {
    fontFamily: "DM Sans",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondText: {
    /* Our mission is to */
    fontFamily: "DM Sans",
    color: "white",
    fontSize: "56px",
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: "73px",
    letterSpacing: "0.03em",
    paddingTop: "2.5em",
  },
  purpleLineRight: {
    zIndex: "10000",
    position: "absolute",
    left: "79.51%",
    right: "0%",
    top: "130.37%",
  },
  purpleLineLeft: {
    zIndex: "10000",
    position: "absolute",
    left: "0%",
    right: "59.03%",
    top: "130.37%",
  },

  secText: {
    fontFamily: "DM Sans",
    color: "white",
    fontSize: "30px",
  },

  empower: {
    fontFamily: "DM Sans",
    fontWeight: "bold",
  },

  threeDots: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "9em",
  },
  orangeDot: {
    paddingRight: "0.7em",
  },
  thirdGrid: {
    backgroundColor: "#0A101A",
    height: "1150px",
  },
  thirdGridText: {
    fontFamily: "DM Sans",
    paddingLeft: "13em",
    paddingTop: "12em",
  },
  whatWeDo: {
    fontFamily: "DM Sans",
    fontSize: "36px",
    fontWeight: "bold",
    color: "white",
  },
  whatWeDoText: {
    fontFamily: "DM Sans",
    paddingTop: "1em",
    fontSize: "24px",
    color: "white",
  },
  joynr: {
    fontFamily: "DM Sans",
    fontWeight: "bold",
  },
  purpleline: {
    position: "absolute",
    left: "29.37%",
    right: "0%",
    top: "181.97%",
    bottom: "-82.86%",

    background: "#5D25F2",
    zIndex: "10000",
  },
  threeDots2: {
    paddingTop: "0.6em",
  },

  teamPhoto: {
    width: "569px",
    height: "393px",
    position: "absolute",
    left: "11.80%",
    right: "46.81%",
    top: "260.71%",
    bottom: "0%",
  },
  smallPurpleline: {
    position: "absolute",
    left: "0%",
    right: "88.2%",
    top: "283.29%",
    bottom: "-184.54%",

    background: "#5D25F2",
  },
  bigPurpleline: {
    position: "absolute",
    left: "51.19%",
    right: "0.28%",
    top: "283.29%",
    bottom: "-184.54%",
    background: "#5D25F2",
  },
  whoAreWe: {
    float: "right",
    paddingTop: "11em",
    paddingRight: "12em",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "47px",
    letterSpacing: "0.03em",

    color: "#F0F0F0",
  },

  lastGrid: {
    height: "568px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lastGridText: {
    fontFamily: "DM Sans",
    fontSize: "24px",
  },
  lastGrid1: {
    fontFamily: "DM Sans",
    display: "flex",
    justifyContent: "center",
    paddingTop: "2em",
    paddingRight: "4em",
    paddingLeft: "2em",
  },

  lastGrid2: {
    fontFamily: "DM Sans",
    display: "flex",
    justifyContent: "center",

    paddingLeft: "2em",
  },
}));

export default About;
