import React, {useEffect} from 'react'
import NavBar from '../components/navBar';
import { Grid, makeStyles, Typography, } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import purpleWave from "../img/purplewave.svg";
import { border } from '@mui/system';





const Support = () => {
 
const classes = useStyles();

const commonStyles = {
  borderColor: '#546B92 !important',
  m: 1,
  border: 1,
  backgroundColor:"#0F1722",};

return  ( 

<div className ={classes.supportMainDiv}>

<Grid className={classes.supportMainGrid}container rowSpacing={1} sx={{ ...commonStyles,  }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid sx={{ ...commonStyles, borderRadius: '8px' }} item xs={6}>
    <Typography>How do I create an account?</Typography>
  </Grid>
  <Grid sx={{ ...commonStyles, borderRadius: '8px' }} item xs={6}>
  <Typography>What do I do if I feel abused by <br />
    another user?</Typography>
  </Grid>
  <Grid sx={{ ...commonStyles, borderRadius: '8px' }} item xs={6}>
   <Typography>What happens with my personal <br />
      data on JOYNR?</Typography>
  </Grid>
  <Grid sx={{ ...commonStyles, borderRadius: '8px' }} item xs={6}>
    <Typography>I forgot my password!<br />
      Where can I set new one?
    </Typography>
    
  </Grid>
</Grid>

</div>
)
};

const useStyles = makeStyles((theme) => ({

  supportMainDiv: {
    backgroundImage: 'url(' + purpleWave + ')',
    backgroundRepeat:'no-repeat',
      backgroundColor: '#0A101A',
      color: '#f0f0f0',
      fontFamily: 'DM Sans',
      height:'900px'
    
  
},
supportMainGrid:{
  justifyContent:'center',
  alignItems:'center',
  // border: "1px solid",

},


}
));


export default Support;