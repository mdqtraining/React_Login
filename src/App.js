import form, { Button, Paper, Stack } from "@mui/material";
import { Grid, TextField } from "@mui/material";
import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./css/style.css";
import { maxHeight } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function App() {
  return (
    <>
      <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
        <Box
          className="sample"
          sx={{
            border: "1px solid black",
            mt: "10%",
            borderColor: "#d2cbcb;",
            borderRadius: "40px",
            ":hover": { boxShadow: 2 },
            m: 6,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}>
              <Card sx={{ minWidth: 275, height:150 ,borderRadius:4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                   box1
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}>
              <Card sx={{ minWidth: 275, height:150 ,ml:4,borderRadius:4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                   box2
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}>
              <Card sx={{ minWidth: 275, height:60 ,ml:4,borderRadius:4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                   box3
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 275, height:60 ,mt:4,ml:4,borderRadius:4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                   box4
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
           
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={8} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}>
              <Card sx={{ minWidth: 275, height:150 ,borderRadius:4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                   box1
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}>

              <Card sx={{ minWidth: 200, height:200 ,mt:4,ml:4,borderRadius:4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                   box4
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
           
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default App;
