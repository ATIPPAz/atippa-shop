import Link from "next/dist/client/link";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styleds from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Container = styleds.div`
background-color: #67ADFF;
`
const Logo = styleds.div`
background-color: #8FC3FF;
color: #fff;
font-family: 'Inter', sans-serif;
width:calc(40%);
height:calc(100%);`
const Paratext = styleds.p`
`
const SearchBar = styleds.div`
background-color: #8FC3FF;
width:calc(100%);
height:calc(100% );`
function Nav(){
  return (
    <Container>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet" />
    <Box sx={{ flexGrow: 1,padding:"0px 200px" }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Logo>
            <Paratext>
              LOGO
            </Paratext>
          </Logo>
        </Grid>
        <Grid item xs={6}>
          <SearchBar>

         <TextField placeholder="SearchBar" id="Searchbar"/>
          </SearchBar>
        </Grid>
        <Grid item xs={1}>
          <Item>Register</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>Login</Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
    
  );
}
export default Nav;