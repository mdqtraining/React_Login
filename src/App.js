import logo from "./logo.svg";
import "./App.css";
import "./css/style.css"

import Box from "@mui/material/Box";
import form, { Button, Stack } from "@mui/material";
import { Grid, TextField } from "@mui/material";
import React from "react";
import "./css/style.css"
// import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';


const samplepicture =new URL("./images/first.jpg",import.meta.url)

function App() {
  return <>
        <Box alignItems={"center"}>
        <Box sx={{ backgroundColor: '#C8C8C8', boxShadow: 11}}>
          <Grid container justifyContent='center' sx={{ textAlign: 'center' }} >

    <Box className="sample"  sx={{ border:"1px solid black",p:10 ,borderColor:'#d2cbcb;' , borderRadius:'40px',':hover': {  boxShadow:2},mt:5  }} >
     
    <Grid container >
      <Grid justifyContent='center' sx={{ textAlign: 'center' }} >
    <Box className="samplepicture" >
    <img  src={samplepicture}/>
 </Box>
 </Grid>
 <Grid sx={{pl:5}}>

 <Box  sx={{ border:"1px solid black",p:3,mt:'30%',borderColor:'#d2cbcb;',width:'210px',backgroundColor:'#C8C8C8', borderRadius:'20px',textAlign:"left"}} >
  <Box>
    <h2>Welcome Back</h2>
    <p>Please Enter Your Email and Password</p>
    <Grid>
    <TextField id="Email" label="Email id" variant="outlined" size='small'color='secondary'
      />
      </Grid>
      <Grid sx={{mt:2}}>
       <TextField    id="MobileNum" label="Password" required variant="outlined"  size='small'color='secondary'
                                    inputProps={{
                                        maxLength: 10
                                    }}
                                   
                                  
                                />
                                </Grid>
                               
                                <Grid container>
                                <Grid sx={{pt:2}}>
                                    <Stack spacing={2} direction="row" >
                                        <Button 
                                       
                                         variant="outlined"
                                            type='submit' sx={{ color: 'white', backgroundColor: '#FFC901', borderRadius: '5px 18px', ':hover': {  borderColor: '#FFC901', color: '#000000'} }}>Login 

                                            <LoginIcon sx={{ml:1}}></LoginIcon>
                                            </Button>
                                      
                                    </Stack>
                                    
                                    <Box><p>Dont have on account yet? Create Account</p></Box>
                              
                                </Grid>
                              
                                </Grid>
                               
  </Box>
 <Grid>
 
 </Grid>

 </Box>
 </Grid>
 
    </Grid>
   
    </Box>
          </Grid>
        </Box>
        </Box>
    
        </>
}

export default App;
