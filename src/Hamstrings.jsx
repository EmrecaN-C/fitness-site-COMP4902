import React from 'react';
import { Link } from 'react-router-dom';
import './css/Hamstrings.css';

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


import dsld from './images/hamstrings-workouts/dumbbell-stiff-leg-deadlift.png';
import kettsw from './images/hamstrings-workouts/kettlebell-swing.png';
import lyleg from './images/hamstrings-workouts/lying-leg-curl.png';
import seatleg from './images/hamstrings-workouts/seated-leg-curl.png';
import sinleg from './images/hamstrings-workouts/single-leg-dumbbell-deadlift.png';
import legded from './images/hamstrings-workouts/stiff-leg-deadlifts.png';
import sumod from './images/hamstrings-workouts/sumo-deadlift.png';
import trapbde from './images/hamstrings-workouts/trap-bar-deadlift.png';

function Hamstrings() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <div className="hamstrings-container">
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
               className='hamstrings-button'
                sx={{ fontFamily: "Quicksand", backgroundColor: "#2a9d8f" }}
                component={Link}
                to={"/exercises"}
               >Back to the Exercises Page</Button>
               <div className="header-1">HAMSTRINGS EXERCISES
               </div>
               <div className="hamstrings-card-container">
                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="dsld"
                           image={dsld}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Dumbell Stiff Leg Deadlift
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

                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="kettsw"
                           image={kettsw}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Kettlebell Swing
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : KETTLEBELL
                               <br />
                               EXP LEVEL : BEGINNER
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="lyleg"
                           image={lyleg}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Lying Leg Curl
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

                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="seatleg"
                           image={seatleg}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Seated Leg Curl
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

                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="sinleg"
                           image={sinleg}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Single Leg Dumbbell Deadlift
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : DUMBBELL
                               <br />
                               EXP LEVEL : ADVANCED
                           </Typography>
                       </CardContent>
                       <CardActions sx={{ justifyContent: 'center' }}>

                           <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                       </CardActions>
                   </Card>

                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="legded"
                           image={legded}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Stiff Leg Deadlifts
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

                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="sumod"
                           image={sumod}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                           Sumo Deadlift
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

                   <Card sx={{ maxWidth: 945 }} className='hamstrings-exercise-card'>
                       <CardMedia
                           component="img"
                           alt="trapbde"
                           image={trapbde}
                           height="auto"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                               Trap Bar Deadlift
                           </Typography>
                           <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               EQUIPMENT : TRAP BAR
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

export default Hamstrings