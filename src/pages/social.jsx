import React, {useEffect} from 'react'
import "@fontsource/dm-sans"; 
import NavBar from '../components/navBar';
import { Grid, makeStyles, Typography, } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import socialPurple from "../img/socialPurple.svg";
import iphoneTiktok from "../img/iphonetiktok.png";
import iphoneInstagram from "../img/iphoneinstagram.png";
import tiktokLogo from "../img/tiktok.png";
import instagramLogo from "../img/instagram.png";
import facebookLogo from "../img/facebook.png";
import linkedinLogo from "../img/linkedinLogo.png";
import Box from '@mui/material/Box';
import { color } from '@mui/system';




const SocialPage = () => {

const classes = useStyles();

return  ( 

<div className ={classes.socialMainDiv}>
<Grid>
<Grid className={classes.mainGrid} >
<Grid className={classes.letsConnectGrid}>
  <Typography className={classes.LetsConnect}>Let's connect</Typography>
  <Typography className={classes.LetsConnectText}>Follow us on our social media pages and see our lastest <br />
    news and updates!</Typography>
    
<Grid className={classes.leftGrid}>
    <Grid container direction="row"  classesName={classes.socialMedia} >
    <Grid className={classes.tiktokGrid}><img className={classes.iphoneTiktok} src={iphoneTiktok} alt="iphone Tiktok" />
    <Grid className={classes.logoGrid} ><a href='https://www.tiktok.com/@joynr.co' target='_blank'><img className={classes.tiktokLogo} src={tiktokLogo} alt ="tiktok Logo"/></a></Grid></Grid>

    
    <Grid className={classes.instagramGrid} ><img className={classes.iphoneInstagram} src={iphoneInstagram} alt="iphone Instagram" />
    <Grid className={classes.logoGrid} ><a href='https://www.instagram.com/joynr.co/' target='_blank'><img className={classes.instagramLogo} src={instagramLogo} alt ="instagram Logo"/></a></Grid  ></Grid>
    
</Grid>
</Grid>
</Grid>


  <Grid className={classes.middleGrid}>
  <Grid className={classes.faceBookGrid}> <img className={classes.facebooklogo} src={facebookLogo} alt="facebook Logo"/>
  <Typography className={classes.logoText}>Facebook</Typography></Grid>
  <Grid className={classes.linkedinGrid}> <a href='https://www.linkedin.com/company/joynr-gaming/' target='_blank'><img className={classes.linkedinLogo} src={linkedinLogo} alt="linkedin Logo"/></a>
  <Typography className={classes.logoText}>Linkedin</Typography></Grid>
</Grid>

  <Grid className={classes.rightGrid} >
  <Typography className={classes.rightGridText} >Got any questions?<br />
  Connect us through our email address:</Typography>
   <Typography key="Email" component="a" href="mailto:support@joynr.co"  className={classes.eMail}>support@joynr.co</Typography>
  </Grid>



  
  </Grid>
  </Grid>

</div>
)
};

const useStyles = makeStyles((theme) => ({

  socialMainDiv: {
    
    backgroundRepeat:'no-repeat',
    backgroundColor: '#0A101A',
    color: '#f0f0f0',
    fontFamily: 'DM Sans',
    height:'900px'
  
},
// socialPurpleWave:{
//   marginTop: '-200px'
  
// },
socialPurple:{
  zIndex:-999
},

mainGrid:{
display:'flex',
flowDirection:'row',
justifyContent:'center',
alignItems:'center'
},
letsConnectGrid:{

},
LetsConnect:{
fontSize:'36px',
fontWeight:'Bold',
paddingTop:'1em'
},

LetsConnectText:{
fontSize:'18px',
paddingBottom:'2em'

},

socialMedia:{


},
tiktokGrid:{
  paddingRight:'1em'
},

iphoneTiktok:{
  width:'199px',
  height:'404',
  
},
instagramGrid:{
  paddingLeft:'1em'
},
iphoneInstagram:{
  width:'199px',
  height:'404',
  
},
logoGrid:{
  display:'flex',
  justifyContent:'center',

},
tiktokLogo:{

  width:'47px',
  height:'47px'

},
instagramLogo:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  width:'47px',
  height:'47px'

},
middleGrid:{
display:'flex',
flexFlow:'column',
justifyContent:'center',
alignItems:'center',
paddingLeft:'2em'
},

faceBookGrid:{
  paddingTop:'7em',
  paddingBottom:'1em'
},
linkedinGrid:{
  paddingTop:'3em',
},

logoText:{
  fontSize:'18px',
  fontWeight:'bold',

},
facebooklogo:{
  width:'65px',
  height:'65px'
},
linkedinLogo:{
  width:'65px',
  height:'65px'
},
rightGrid:{
  display:'flex',
  flexFlow:'column',
  justifyContent:'center',
  alignItems:'left',
  paddingLeft:'8em'
  },
  rightGridText:{
    fontSize:'18px',
    paddingTop:'2em'
  },

  eMail:{
  fontSize:'24px',
  fontWeight:'bold',
  color:'white',
  textDecoration:'none'
  },


}
));



export default SocialPage;
