import React from 'react';
import { Link } from 'react-router-dom';
import './css/Back.css';

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


import bodrow from './images/back-workouts/bent-over-dumbbell-row.png';
import borow from './images/back-workouts/bent-over-row.png';
import ibbrow from './images/back-workouts/incline-bench-barbell-row.png';
import seatcr from './images/back-workouts/seated-cable-row.png';
import smithd from './images/back-workouts/smith-machine-deadlift.png';
import superman from './images/back-workouts/superman.png';
import tbarrow from './images/back-workouts/t-bar-row.png';
import worldgs from './images/back-workouts/worlds-greatest-stretch.png';


function Back() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <div className="back-container">
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
               className='back-button'
                sx={{ fontFamily: "Quicksand", backgroundColor: "#2a9d8f" }}
                component={Link}
                to={"/exercises"}
               >Back to the Exercises Page</Button>
               <div className="header-1">BACK EXERCISES
               </div>
               <div className="back-card-container">
                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="bodrow"
                           image={bodrow}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Bent Over Dumbell Row
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : DUMBELL
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="borow"
                           image={borow}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Bent Over Row
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BARBELL
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="ibbrow"
                           image={ibbrow}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Incline Bench Barbell Row
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BARBELL
                               <br />
                               EXP LEVEL : INTERMEDIATE
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="seatcr"
                           image={seatcr}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Seated Cable Row
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

                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="smithd"
                           image={smithd}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Smith Machine Deadlift
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : MACHINE
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="superman"
                           image={superman}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Superman
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

                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="tbarrow "
                           image={tbarrow}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           T Bar Row
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : BARBELL
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='back-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="worldgs"
                           image={worldgs}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               World's Greatest Stretch
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

export default Back