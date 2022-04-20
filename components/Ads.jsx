import styled from "styled-components";
import MuiGrid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Group from "../public/Group.png";
import Vector from "../public/Vector.png";
import Morpheus from "../public/Morpheus.png";
import Samsung from "../public/Samsung.png";
import Monday from "../public/Monday.png";
import Segment from "../public/segment.png";
import Image from 'next/image'

// const Grid = styled(MuiGrid)(() => ({
//   maxWidth: "100%",
//  height: "24vh",

// }));


function Ads() {
  return (
    <Box style={{ textAlign: "center",border: "1px solid"}}>
<Grid style={{ width: "100%"}}>
    <Typography style={{margin:'2rem' ,fontSize:'1rem'}}>Companies we work with!</Typography>
      <Grid container spacing={2}  xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
        <Image src={Group} alt="z-openZapplin" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
        <Image src={Vector} alt="oracle" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
        <Image src={Morpheus} alt="Morpheus" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
        <Image src={Samsung} alt="Samsung" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
        <Image src={Monday} alt="Monday" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
        <Image src={Segment} alt="Monday" />
        </Grid>
    </Grid>
</Grid>
</Box>
  );
}

export default Ads;