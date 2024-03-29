import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  paper:
  { padding: "1rem",
  maxWidth: "80%",
  textAlign: "center"
},
  img:
   { margin: "auto",
    display: "block",
    width: "100%",
     height: "100%"
  },
  box:
  { width: 128, height: "100%"
},
  typo:
  { textAlign: "left",
   padding: "4px" },
}));

export default function Beyin() {
  const classes = useStyles();

  return (
    <div style={{ margin: "3rem 0rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.paper}>
            <Grid xs={12} container spacing={2}>
              <Grid item>
                <Box className={classes.box}>
                  {/* <Image className={classes.img} alt="" src="" /> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container spacing={2}>
                  <Grid item>
                    <Typography variant="h5" className={classes.typo}>
                      it keeps a lasting impression every time
                    </Typography>
                    <Typography variant="body2" className={classes.typo}>
                      Be memorable! leave a card that can be experienced again
                      and again long after you’re gone.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.paper}>
            <Box className={classes.box}>
              {/* <Image className={classes.img} alt="" src="" /> */}
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.paper}>
            <Grid xs={12} container spacing={2}>
              <Grid item>
                <Box className={classes.box}>
                  {/* <Image className={classes.img} alt="" src="" /> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container spacing={2}>
                  <Grid item>
                    <Typography variant="h5" className={classes.typo}>
                      Unlimited copies and views
                    </Typography>
                    <Typography variant="body2" className={classes.typo}>
                      Distribute as many copies as you need,no strings attached!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.paper}>
            <Grid xs={12} container spacing={2}>
              <Grid item>
                <Box className={classes.box}>
                  {/* <Image className={classes.img} alt="" src="" /> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container spacing={2}>
                  <Grid item>
                    <Typography variant="h5" className={classes.typo}>
                      Works on all Smart devices
                    </Typography>
                    <Typography variant="body2" className={classes.typo}>
                      The EBC card works on all popular smart devices like
                      Android and IOS as long as it can run Chrome, Edge or
                      Safari.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
