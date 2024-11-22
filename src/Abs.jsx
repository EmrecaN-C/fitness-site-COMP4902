import React from 'react';
import { Link } from 'react-router-dom';
import './css/Abs.css';

import {
    Card, CardContent, CardMedia, Typography, Button,
    CardActionArea, CardActions, AppBar, Box, Toolbar,
    IconButton, Menu, Tooltip, Avatar, MenuItem, Container
} from '@mui/material';
import { Login, Menu as MenuIcon } from '@mui/icons-material';


import logo from './images/logo.png';
import cookie from './images/cookie.svg';
import contact from './images/contact.svg';
import quality from './images/quality.svg';
import shield from './images/shield.svg';
import faq from './images/faq.svg';
import info from './images/info.svg';

import situp from './images/abs-workouts/sit-up.png';
import lylegra from './images/abs-workouts/lying-leg-raise.png';
import abbic from './images/abs-workouts/ab-bicycle.png';
import cablecr from './images/abs-workouts/cable-crunch.jpg';
import pallof from './images/abs-workouts/pallof-press.png';
import svacuum from './images/abs-workouts/standing-stomach-vacuum.png';
import weicr from './images/abs-workouts/weighted-crunch.png';
import legtoe from './images/abs-workouts/straight-leg-toe-touch.png';



function Abs() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <div className="abs-container">
    <header>
           <AppBar position="static" sx={{ backgroundColor: "#2a9d8f" }}>
               <Container maxWidth="xl">
                   <Toolbar disableGutters>

                       <img
                           src={logo}
                           alt="Gym & Tonic Logo"
                           style={{ width: 40, height: 40, marginRight: 8 }}
                       />


                       <Typography
                           variant="h6"
                           noWrap
                           component={Link}
                           to={"/"}
                           sx={{
                               mr: 2,
                               display: { xs: 'none', md: 'flex' },
                               fontFamily: 'Quicksand',
                               fontWeight: 400,
                               letterSpacing: '.1rem',
                               color: 'inherit',
                               textDecoration: 'none',
                           }}
                       >
                           Gym & Tonic
                       </Typography>


                       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                           <IconButton
                               size="large"
                               aria-label="account of current user"
                               aria-controls="menu-appbar"
                               aria-haspopup="true"

                               color="inherit"
                           >
                               <MenuIcon />
                           </IconButton>
                       </Box>


                       <Box sx={{ flexGrow: 0, ml: 'auto' }}>
                           <Tooltip>
                               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                   <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                               </IconButton>
                           </Tooltip>
                           <Menu
                               sx={{ mt: '45px' }}
                               id="menu-appbar"
                               anchorEl={anchorElUser}
                               anchorOrigin={{
                                   vertical: 'top',
                                   horizontal: 'right',
                               }}
                               keepMounted
                               transformOrigin={{
                                   vertical: 'top',
                                   horizontal: 'right',
                               }}
                               open={Boolean(anchorElUser)}
                               onClose={handleCloseUserMenu}
                           >
                               {settings.map((setting) => (
                                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                       <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                   </MenuItem>
                               ))}
                           </Menu>
                       </Box>
                   </Toolbar>
               </Container>
           </AppBar>
       </header>

       <main>
           <div className="main-header">
           <Button variant="contained"
               className='abs-button'
                sx={{ fontFamily: "Quicksand", backgroundColor: "#2a9d8f" }}
                component={Link}
                to={"/exercises"}
               >Back to the Exercises Page</Button>
               <div className="header-1">ABS EXERCISES
               </div>
               <div className="abs-card-container">
                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="situp"
                           image={situp}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Sit Up
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BODYWEIGHT
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="lylegra"
                           image={lylegra}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Lying Leg Raise
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BODYWEIGHT
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="abbic"
                           image={abbic}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Ab Bicycle
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BODYWEIGHT
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="cablecr"
                           image={cablecr}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Cable Crunch
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : CABLE
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="pallof"
                           image={pallof}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Pallof Press
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : CABLE
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="svacuum"
                           image={svacuum}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Standing Stomach Vacuum
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BODYWEIGHT
                               <br />
                               EXP LEVEL : INTERMEDIATE
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="weicr"
                           image={weicr}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Weighted Crunch
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : OTHER
                               <br />
                               EXP LEVEL : INTERMEDIATE
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='abs-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="legtoe"
                           image={legtoe}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Straight Leg Toe Touch
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BODYWEIGHT
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

               </div>
           </div>
       </main>

       <footer>
  <div className="first-part">
   <div className="about">
   <Button>
   <img src={info} alt="info" className="info" />
   <p className='text-first'>About us</p>
   </Button>
   </div>
   <div className="contact">
   <Button>
   <img src={contact} alt="contact" className="contact-i" />
   <p className='text-first'>Contact</p>
   </Button>
   </div>
   <div className="faq">
   <Button>
   <img src={faq} alt="faq" className="faq-i" />
   <p className='text-first'>F.A.Q.</p>
   </Button>
   </div>
   
  </div>
  <div className="second-part">
   <div className="logo-part">
   <img src={logo} alt="Gym & Tonic Logo" className="logo" />
   <p class="copyright">© COPYRIGHT 2024 GYM & TONIC</p>
   </div>
  </div>
  <div className="third-part">
  <div className="cookie">
   <Button>
   <img src={cookie} alt="cookie" className="cookie-i" />
   <p className='text-first'>Cookie Prefrecences</p>
   </Button>
   </div>
   <div className="quality">
   <Button>
   <img src={quality} alt="quality" className="quality-i" />
   <p className='text-first'>Quality Policy</p>
   </Button>
   </div>
   <div className="shield">
   <Button>
   <img src={shield} alt="shield" className="shield-i" />
   <p className='text-first'>Privacy Policy</p>
   </Button>
   </div>
  </div>
 </footer>
</div>
  )
}

export default Abs