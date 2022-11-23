import form, {
  Avatar,
  Button,
  createTheme,
  Divider,
  MenuItem,
  Paper,
  Stack,
  ThemeProvider,
} from "@mui/material";

import { Grid, TextField } from "@mui/material";
import React from "react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowUpward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";

import "./css/style.css";
import { maxHeight } from "@mui/system";
import { useTheme } from "@emotion/react";
const theme = createTheme({
  palette: {
    background: {
      paper1: "#7EC948",
    },
  },
});
const theme1 = createTheme({
  palette: {
    background: {
      paper: "#1E88E5",
    },

    white: {
      paper: "#FFFFFF",
    },
    box7: {
      paper: "#EDE7F6",
    },
    light: {
      paper: "#9E9EA7",
    },
  },
});

// <box-2>
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
            textAlign="center"
            sx={{ py: 6 }}
          >
            <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 3 }}>
              <ThemeProvider theme={theme}>
                <Card
                  className="box1"
                  sx={{
                    minWidth: 200,
                    height: 180,
                    ml: 4,
                    borderRadius: 4,
                    bgcolor: "background.paper1",
                    boxShadow: 1,
                  }}
                >
                  <CardContent>
                    <Typography>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid container justifyContent="space-between">
                            <Grid item>
                              <h4>afica</h4>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  ...theme.typography.commonAvatar,
                                  ...theme.typography.mediumAvatar,
                                  backgroundColor:
                                    theme.palette.background.box7,
                                  color: theme.palette.secondary[200],
                                  zIndex: 1,
                                }}
                              >
                                <MoreHorizIcon fontSize="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems="center">
                            <Grid item>
                              <Typography
                                sx={{
                                  fontSize: "2.125rem",
                                  fontWeight: 500,
                                  mr: 1,
                                  mt: 1.75,
                                  mb: 0.75,
                                }}
                              >
                                $500.00
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                sx={{
                                  cursor: "pointer",
                                  ...theme.typography.smallAvatar,
                                  backgroundColor: theme.palette.secondary[200],
                                  color: theme.palette.secondary.dark,
                                }}
                              >
                                <ArrowUpwardIcon
                                  fontSize="inherit"
                                  sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
                                />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sx={{ mb: 1.25 }}>
                          <Typography
                            sx={{
                              textAlign: "left",
                              fontSize: "1rem",
                              fontWeight: 500,
                              color: theme.palette.secondary[200],
                            }}
                          >
                            Total Earning
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <Typography
                              sx={{
                                fontSize: "2.125rem",
                                fontWeight: 500,
                                mr: 1,
                                mt: 1.75,
                                mb: 0.75,
                              }}
                            >
                              $500.00
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sx={{ mb: 2, mt: 2 }}>
                        <Typography
                          sx={{
                            textAlign: "left",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: theme.palette.background.paper,
                          }}
                        >
                          Total Earning
                        </Typography>
                      </Grid>
                    </Typography>
                  </CardContent>
                </Card>
              </ThemeProvider>
            </Grid>
            {/* box2  */}
            <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 3 }}>
              <ThemeProvider theme={theme1}>
                <Card
                  sx={{
                    minWidth: 200,
                    height: 180,
                    ml: 4,
                    borderRadius: 4,
                    bgcolor: "background.paper",
                  }}
                >
                  <CardContent>
                    <Box sx={{ p: 2.25 }}>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid container justifyContent="space-between">
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  ...theme.typography.commonAvatar,
                                  ...theme.typography.largeAvatar,
                                  backgroundColor: theme.palette.primary[800],
                                  color: "#fff",
                                  mt: 1,
                                }}
                              >
                                <LocalMallOutlinedIcon fontSize="inherit" />
                              </Avatar>
                            </Grid>
                            <Grid item>
                              <Button
                                disableElevation
                                size="small"
                                sx={{ color: "inherit" }}
                              >
                                Month
                              </Button>
                              <Button
                                disableElevation
                                // variant={ 'contained' : 'text'}
                                size="small"
                                sx={{ color: "inherit" }}
                                // onClick={(e) => handleChangeTime(e, false)}
                              >
                                Year
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sx={{ mb: 0.75 }}>
                          <Grid container alignItems="center">
                            <Grid item xs={6}>
                              <Grid container alignItems="center">
                                <Grid item>
                                  {/* {timeValue ? ( */}
                                  {/* <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        $108
                                                    </Typography> */}

                                  <Typography
                                    sx={{
                                      fontSize: "2.125rem",
                                      fontWeight: 500,
                                      mr: 1,
                                      mt: 1.75,
                                      mb: 0.75,
                                    }}
                                  >
                                    $961
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Avatar
                                    sx={{
                                      ...theme.typography.smallAvatar,
                                      cursor: "pointer",
                                      backgroundColor:
                                        theme.palette.primary[200],
                                      color: theme.palette.primary.dark,
                                    }}
                                  >
                                    <ArrowDownwardIcon
                                      fontSize="inherit"
                                      sx={{
                                        transform: "rotate3d(1, 1, 1, 45deg)",
                                      }}
                                    />
                                  </Avatar>
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography
                                    sx={{
                                      fontSize: "1rem",
                                      fontWeight: 500,
                                      color: theme.palette.primary[200],
                                      textAlign: "left",
                                    }}
                                  >
                                    Total Order
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* </CardWrapper> */}
                  </CardContent>
                </Card>
              </ThemeProvider>
            </Grid>
            {/* box3 */}
            <Grid
              item
              lg={4}
              sm={4}
              xl={4}
              xs={14}
              md={4}
              sx={{ py: 3 }}
              d-flex
              alignItems="center"
            >
              <ThemeProvider theme={theme1}>
                <Card
                  sx={{
                    minWidth: 240,
                    height: 70,
                    ml: 4,
                    borderRadius: 3,
                    bgcolor: "background.paper",
                  }}
                >
                  <CardContent>
                    <List sx={{ py: 0, alignItems: "center" }}>
                      <ListItem disableGutters sx={{ py: 0 }}>
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            sx={{
                              ...theme.typography.commonAvatar,
                              ...theme.typography.largeAvatar,
                              backgroundColor: theme.palette.primary[800],
                              color: "#fff",
                              mb: 4,
                            }}
                          >
                            <TableChartOutlinedIcon fontSize="inherit" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            py: 0,
                            mb: 4,
                          }}
                          primary={
                            <Typography sx={{ color: "#fff" }}>
                              $203k
                            </Typography>
                          }
                          secondary={
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "primary.light" }}
                            >
                              Total Income
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
                {/* </Box4> */}
                <Card
                  sx={{
                    minWidth: 240,
                    height: 70,
                    mt: 4,
                    ml: 4,
                    borderRadius: 3,
                    bgcolor: "white.paper",
                  }}
                >
                  <CardContent>
                    <Typography>
                      <List sx={{ py: 0, alignItems: "center" }}>
                        <ListItem disableGutters sx={{ py: 0 }}>
                          <ListItemAvatar>
                            <Avatar
                              variant="rounded"
                              sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.largeAvatar,
                                backgroundColor: theme.palette.warning.light,
                                color: theme.palette.warning.dark,
                                mb: 4,
                              }}
                            >
                              <StorefrontTwoToneIcon fontSize="inherit" />
                            </Avatar>
                          </ListItemAvatar>

                          <ListItemText
                            sx={{
                              py: 0,
                              mb: 4,
                            }}
                            primary={
                              <Typography sx={{ color: "light.paper" }}>
                                $203k
                              </Typography>
                            }
                            secondary={
                              <Typography
                                variant="subtitle2"
                                sx={{ color: "light.paper" }}
                              >
                                Total Income
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                      {/* </Box4> */}
                    </Typography>
                  </CardContent>
                </Card>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={8} sm={4} xl={4} xs={14} md={4} sx={{ py: 3 }}>
              <Card sx={{ ml: 4, borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Grid container direction="column" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2">
                                  Total Growth
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="h6">$2,324.00</Typography>
                              </Grid>
                              <Grid item>
                              <img alt="images" src={require('./images/barxchart.jpg')} width={"80%"} height={"100%"} />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* box-6 */}
            <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 3 }}>
              <Card sx={{ minWidth: 100, height: 200, ml: 4, borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="subtitle2">Popular Stocks</Typography>
                </CardContent>
                <ThemeProvider theme={theme1}>
                  <Card
                    sx={{
                      Width: 10,
                      height: 40,
                      padding: 4,
                      borderRadius: 4,
                      justifyContent: "center",
                      bgcolor: "box7.paper",
                    }}
                  >
                    <CardContent>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid container justifyContent="space-between" >
                            <Grid item sx={{mb:4}}>
                              <h2>Igreen</h2>
                            </Grid>
                            <Grid item>
                              <h2>$1832</h2>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </ThemeProvider>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default App;
