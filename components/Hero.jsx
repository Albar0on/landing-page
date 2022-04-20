import * as React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";

import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIos";


// const useStyles = makeStyles(() => ({
//   box: {
//   },
//   boxx:{
//   },
//   typo:{
//   },
// button:{
// },
// video:{
// }
// }));

export default function Hero() {
  // const style = useStyles();

  return (
<Box style={{ margin: "5rem 1rem 10rem",borderRadius: "30px",border:'1px solid'}}>
  <Grid container spacing={9} columns={12}>
    <Grid item xs={7} sm={12} md={6} lg={7}>
      <Box style={{textAlign: "left",  margin: "4rem 2rem",  maxWidth: "100%",maxHeight: "100%",
}}>
          <Typography
          variant="h4" style={{marginTop: "2rem",fontFamily: "Poppins", fontWeight: 300, lineHeight: "54px", fontSize: "36px"
        }}>
          Get the most effective business <br />
          card ever for only 1$/month
          </Typography>
          <Typography component="div" variant="p" style={{ margin: "2rem 1px" }}>
          Extended Business Card Platform allows you to create extended
          business cards for you, your company, or clients in no time and
          without complex steps for as low as $1 per month!
          </Typography>
          <Button style={{  marginLeft: "1",  border: "1px solid gray", borderRadius: "23rem"
}} variant="light" >
          Get started
          <ArrowForwardIosSharpIcon />
          </Button>
          <span style={{marginLeft:'2rem'}}>Get one month free Trial! cancle anytime</span>
      </Box>
    </Grid>
        <Grid item xs={5} sm={12} md={6} lg={5}>
          <Box style={{ height: "420px", width: "100%" }}>
          <video controls autostart autoPlay src="./video.mp4" type="video/mp4" alt="Beyin Video"
          style={{  maxWidth: "100%",  height: "100%",  borderRadius: "30px",  boxShadow: "0 134px 148px -76px rgba(0, 0, 0, 0.3)"
        }}
          />
          </Box>
      </Grid>
  </Grid>
</Box>
  );
}