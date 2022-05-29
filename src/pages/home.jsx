import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import backgroudImage from "../img/newLandingPageBackground.png";
import backgroudImage2 from "../img/newLandingPageBackground2.png";
import waveTop from "../img/wavetop.svg";
import signUpBtn from "../img/signUpBtn.svg";
import ladyWithSword from "../img/ladyWithSword.png";
import screen from "../img/screen.png";
import jungleBackground from "../img/jungleBackground.png";
import dudeavatar from "../img/dudeAvatar 1.png";
import statsName from "../img/statsName.svg";
import statsR from "../img/statsR.svg";
import RoundBackground from "../img/RoundBackground.svg";
import connectImg from "../img/connectImg.svg";
import signUp from "../img/signUp.svg";
import leftRoundImg from "../img/leftRoundImg.svg";
import MiddleRoundImg from "../img/middleRoundImg.svg";
import RightRoundImg from "../img/rightRoundImg.svg";
import logo from "../img/logo.png";
import purpleWave from "../img/purplewave.svg";


export default function Home() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "JOYNR: Gaming with team mates, not strangers";
  }, []);

  return (
    <div className={classes.mainGrid}>
      <Grid item container className={classes.header}>
        <Grid item className={classes.headerText}>
          <Typography className={classes.heading}>
            GAMING WITH <span className={classes.teammatesText}>TEAMMATES</span>{" "}
            <br />
            NOT STRANGERS
          </Typography>
        </Grid>
        <Grid item>
          <img src={ladyWithSword} className={classes.ladyWithSword} />
        </Grid>

        <img src={waveTop} className={classes.waveTop} />
        <Grid className={classes.WaveText}>
          <Typography>
            FORGET ABOUT RANDOM MATCHMAKING <br />
            TAKE CONTROL OVER YOUR GAMING EXPERINCES.
          </Typography>
          <Grid className={classes.signUpBtnn}>
            <img src={signUpBtn} />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.buildYourTeam} id="how">
        <Grid class={classes.buildYourTeamContainer}>
          <Typography className={classes.h2}>Build your team</Typography>
          <Typography className={classes.buildYourTeamContent}>
            The JOYNR search engine elimates the use
            <br />
            of random matchmaking and gives the power
            <br />
            to the player.
          </Typography>
          <Typography className={classes.buildYourTeamContent}>
            We allow you to search among players and <br />
            match up with people that share the same <br />
            passion and skill as yourself.
          </Typography>
        </Grid>

        <Grid className={classes.screen}>
          <Grid className={classes.find_your_tm_left}>
            {" "}
            <img src={screen} alt="screen" />{" "}
          </Grid>
          <Grid className={classes.find_your_tm_middle}>
            {" "}
            <img src={screen} alt="screen" />{" "}
          </Grid>
          <Grid className={classes.find_your_tm_right}>
            {" "}
            <img src={screen} alt="screen" />{" "}
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.matchPerfect}>
        <Grid className={classes.jungleBackground}>
          <img
            className={classes.dudeAvatar}
            src={dudeavatar}
            alt=" Dude Avatar"
          />
        </Grid>
        <Grid>
          <Typography className={classes.h2}>See your user stats</Typography>
          <Typography>
            JOYNR helps you find teammates based <br />
            on your own ranks, achivments and <br />
            preferences.
          </Typography>
          <Typography>Stats last 10 games</Typography>
          {/* <img src={statsName} alt="statsName" /> */}
          <table className={classes.statsTable}>
            <tr className={classes.statsReport}>
              <td></td>
              <th>Champs</th>
              <th>Kills</th>
              <th>Deaths</th>
              <th>Assists</th>
              <th>KDR</th>
              <th>Played</th>
            </tr>
            <tr className={classes.statsReport}>
              <td>Image</td>
              <td>Image</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr className={classes.statsReport}>
              <td>Image</td>
              <td>Image</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
            <tr className={classes.statsReport} style={{backgroundImage: "linearGradient(to top, rgba(0,0,0,0), rgba(15, 23, 34, 1))"}}>
              <td>Image</td>
              <td>Image</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
            </tr>
          </table>
        </Grid>
      </Grid>

      <Grid className={classes.createProfile}>
        <img src={purpleWave} alt="Purple Wave" className="purpleWaveImg"/>
      </Grid>
      <Grid className={classes.threeCircleGrid}>
        <Typography className={classes.howToGetStarted}>
          HOW TO GET STARTED
        </Typography>
        <Grid container spacing={4} className={classes.RoundBackground}>
          <Grid item className={classes.signUp}>
            <img
              className={classes.signUpImg}
              src={signUp}
              alt="Start Creating"
            />
            <Typography className={classes.roundBackgroundText}>
              1. Sign up
            </Typography>
          </Grid>
          <Grid item className={classes.verificationCode}>
            <img
              className={classes.connectImg}
              src={connectImg}
              alt="Start Creating"
            />
            <Typography className={classes.roundBackgroundText}>
              2. Get your verification code
            </Typography>
          </Grid>
          <Grid item className={classes.startCreating}>
            <img
              className={classes.leftRoundImg}
              src={leftRoundImg}
              alt="Start Creating"
            />
            <img
              className={classes.MiddleRoundImg}
              src={MiddleRoundImg}
              alt="Start Creating"
            />
            <img
              className={classes.RightRoundImg}
              src={RightRoundImg}
              alt="Start Creating"
            />
            <Typography className={classes.roundBackgroundText}>
              3. Start creating <br /> your team!{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.lowerBackground}>
        <Grid className={classes.joinUsBox} id={classes.signUp}>
          <Typography className={classes.joinUsH4}>Join us!</Typography>
          <Typography className={classes.joinUsP}>
            Sign up and explore a platform where gamers of the world come
            <br />
            together to create their optimal gamaing experience.
          </Typography>
          <Grid className={classes.signUpBtnGrid}>
            <button onclick="signUp()" className={classes.signUpBtn}>
              SIGN UP
            </button>
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.footer}>
        <a className={classes.logoLink} onClick={window.scrollTo(0, 0)}>
          <img className={classes.footerImg} src={logo} alt="Logo" />
        </a>
        <div className={classes.rightContent}>
          <ul className={classes.contact}>
            <li className={classes.contactsLi}>
              <Link
                className={classes.about}
                to="/about"
                rel="noopener noreferrer"
              >
                About
              </Link>
            </li>
            <li className={classes.contactsLi}>
              <Link
                className={classes.about}
                to="/PrivacyPolicy"
                rel="noopener noreferrer"
              >
                Privacy policy
              </Link>
            </li>
            <li className={classes.contactsLi}>Terms and conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    backgroundColor: "#0A101A",
    color: "#f0f0f0",
    fontFamily: "DM Sans",
    padding: "0",
    margin: "0",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },

  header: {
    backgroundImage: "url(" + backgroudImage + ")",
    backgroundSize: "cover",
    width: "100%",
    height: "1000px",
    paddingTop: "150px",
    position: "relative",
    overflowX: "hidden",
    overflowY: "hidden",
    fontFamily: "DM Sans",
  },
  heading: {
    marginTop: "0",
    fontSize: "2rem",
    lineHeight: "120%",
    marginBottom: "30px",
    fontFamily: "DM Sans",
    fontWeight: "700",
  },

  headerText: {
    minWidth: "1000px",
    maxWidth: "1200px",
    fontSize: "48px",
    fontWeight: "700",
    zIndex: "10",
    paddingLeft: "2em",
    fontFamily: "DM Sans",
  },
  teammatesText: {
    fontFamily: "DM Sans",
    fontWeight: "bold",
    fontSize: "64px",
  },

  ladyWithSword: {
    left: "70vw",
    top: "14vw",
    width: "25rem",
    cursor: "pointer",
    zIndex: "99",
    position: "absolute",
  },

  waveTop: {
    zIndex: "100",
    filter: "drop-shadow(12px 2px 4px #EE5B31)",
    position: "absolute",
    width: "100vw",
    paddingTop: "10em",
  },
  WaveText: {
    top: "42%",
    left: "5rem",
    zIndex: 1000,
    position: "absolute",
    fontFamily: "DM Sans",
  },
  signUpBtnn: {
    fontFamily: "DM Sans",
    paddingTop: "2em",
  },
  h2: {
    fontFamily: "DM Sans",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  h4: {
    fontFamily: "DM Sans",
    fontize: "2.25rem",
    margin: "0",
    padding: "0",
  },
  h5: {
    fontFamily: "DM Sans",
    fontSize: "1.5rem",
  },
  h6: {
    fontFamily: "DM Sans",
    marginTop: "24px",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "153%",
    marginBottom: "0",
  },

  text: {
    fontFamily: "DM Sans",
    fontSize: "1.125rem",
  },

  normal: {
    fontFamily: "DM Sans",
    fontWeight: "400",
  },

  row: {
    display: "flex",
    justifyContent: "space-around",
  },

  col: {
    display: "flex",
  },
  buildYourTeamContainer: {
    textAlign: "left",
    paddingLeft: "2rem",
    flexDirection: "column",
  },

  buildYourTeam: {
    margin: "auto",
    display: "flex",
    marginTop: "150px",
    textAlign: "left",
    justifyContent: "space-around",
  },
  find_your_tm_left: {
    height: "50%",
    zIndex: 100,
    transform: "scale(0.7)",
    fontFamily: "DM Sans",
    padding: 0,
  },
  find_your_tm_middle: {
    fontFamily: "DM Sans",
    zIndex: "200",
    position: "absolute",
    height: "50%",
    paddingBottom: "2em",
  },
  find_your_tm_right: {
    height: "50%",
    zIndex: 100,
    fontFamily: "DM Sans",
    padding: 0,
    transform: "scale(0.7)",
  },
  jungleBackground: {
    backgroundImage: "url(" + jungleBackground + ")",
    borderRadius: "50%",
    height: "523px",
    width: "523px",
    zIndex: "90",
    display: "flex",
    justifyContent: "center",
    paddingTop: "8em",
    overflow: "hidden",
  },
  dudeAvatar: {
    height: "418px",
    width: "398px",
    zIndex: "100",
  },
  howToGetStarted: {
    fontSize: "36px",
    fontWeight: "bold",
    marginLeft: "4rem",
  },
  screen: {
    height: "20rem",
    width: "30rem",
    display: "flex",
    transform: "scale(0.7)",
    flexDirection: "row",
    justifyContent: "center",
  },
  statsTable: {
    width: "100%",
    marginTop: "6rem",
  },
  statsReport: {
    backgroundColor: "rgba(15, 23, 34, 1)",
    width: "387px",
    height: "74px",
  },

  threeCircleGrid: {
    height: "40rem",
  },
  purpleWaveImg: {
    width:"100vw",
  },
  connectImg: {
    borderRadius: "50%",
  },
  signUpImg: {
    borderRadius: "50%",
  },

  RoundBackground: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "8em",
  },
  rightRoundBackground: {
    bordeRadius: "50%",
    height: "260px",
    width: "260x",
  },
  middleRoundBackground: {
    bordeRadius: "50%",
    height: "322px",
    width: "322px",
  },
  leftRoundBackground: {
    bordeRadius: "50%",
    height: "260px",
    width: "260x",
  },
  roundBackgroundText: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },

  whatIsItContent: {
    width: "70%",
    paddingBottom: "1em",
  },

  hide: {
    display: "none !important",
  },
  createProfile: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "50px",
  },

  matchPerfect: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "left",
    marginTop: "150px",
  },

  textDiv: {
    fontFamily: "DM Sans",
    width: "550px",
  },
  footer: {
    height: "auto",
    width: "102vw",
  },

  lowerBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(" + backgroudImage + ")",
    width: "100%",
    height: "857px",
  },

  joinUsBox: {
    width: "750px",
    height: "370px",
    margin: "250px auto 200px auto",
    backgroundColor: " #0f1722",
    webkitBoxShadow: "0px 0px 154px -56px rgba(17, 78, 160, 0.74)",
    mozBoxShadow: "0px 0px 154px -56px rgba(17, 78, 160, 0.74)",
    boxShadow: "0px 0px 154px -56px rgba(17, 78, 160, 0.74)",
    padding: "56px 83px 56px 83px",
  },
  joinUsH4: {
    fontFamily: "DM Sans",
    fontSize: "48px",
    fontWeight: "bold",
  },
  signUpBtnGrid: {
    fontFamily: "DM Sans",
    paddingTop: "4em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpBtn: {
    fontFamily: "DM Sans",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "252px",
    height: "62px",
    borderRadius: "30px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "white",
    color: "#black",
    cursor: "pointer",
    transition: "all 200ms",
  },

  privacyLink: {
    color: "#5073b8",
    textDecoration: "none",
  },

  stringsWrapper: {
    position: "relative",
  },

  /* FOOTER */
  footer: {
    backgroundColor: "#0b121f",
    height: "263px",
    display: "flex",
    justifyContent: "spaceBetween",
    paddingTop: "75px",
    paddingLeft: "10em",
    paddingRight: "15em",
  },

  RightContent: {
    display: "flex",
    alignItems: "flexStart",
    justifyContent: "spaceBetween",
  },
  logoLink: {
    paddingTop: "2em",
  },
  footerImg: {
    /*
  width:180px;
  height:46px;
  margin: 2% 0 0 2%;
  */
    width: "215px",
    height: "53px",
    margin: "2% 0 0 4%",
    cursor: "pointer",
  },

  contact: {
    fontFamily: "DM Sans",
    display: "inlineBlock",
    listStyle: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  contactsLi: {
    paddingBottom: "1em",
  },
  about: {
    color: "white",
    textDecoration: "none",
  },

  footerList: {
    fontFamily: "DM Sans",
    marginBottom: "32px",
    fontSize: "1.125rem",
    fontWeight: "500",
  },

  footerLink: {
    fontFamily: "DM Sans",
    color: "inherit",
    textDecoration: "none",
  },
  rightContent: {
    fontFamily: "DM Sans",
    marginLeft: "auto",
  },
}));
