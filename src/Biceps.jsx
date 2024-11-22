import React from 'react';
import { Link } from 'react-router-dom';
import './css/Biceps.css';

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

import sdcurl from './images/biceps-workouts/standing-dumbbell-curl.png';
import shcurl from './images/biceps-workouts/standing-hammer-curl.png';
import sdrcurl from './images/biceps-workouts/standing-dumbbell-reverse-curl.png';
import cabcurl from './images/biceps-workouts/cable-curl.png';
import cabcurlrope from './images/biceps-workouts/cable-curl-rope-extension.png';
import ezbar from './images/biceps-workouts/ez-bar-preacher-curl.png';
import incdumb from './images/biceps-workouts/incline-dumbbell-curl-thumb.png';
import seatedcurl from './images/biceps-workouts/seated-concentration-curl.png';
import spider from './images/biceps-workouts/spider-curl.png';
import zott from './images/biceps-workouts/zottman-preacher-curl.png';


function Biceps() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <div className="biceps-container">
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
                    <div className="header-1">BICEPS EXERCISES
                    </div>
                    <div className="biceps-card-container">
                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="sdcurl"
                                image={sdcurl}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Standing Dumbbell Curl
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

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="shcurl"
                                image={shcurl}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                     Standing Hammer Curl
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

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="sdrcurl"
                                image={sdrcurl}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Standing Dumbell Reverse Curl
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    EQUIPMENT : DUMBBELL
                                    <br />
                                    EXP LEVEL : BEGINNER
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>

                                <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="cabcurl"
                                image={cabcurl}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Cable Curl
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

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="cabcurlrope"
                                image={cabcurlrope}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Cable Curl Rope Extension
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

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="incdumb"
                                image={incdumb}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Incline Dumbbell Curl
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    EQUIPMENT : DUMBBELL
                                    <br />
                                    EXP LEVEL : BEGINNER
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>

                                <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="seatedcurl"
                                image={seatedcurl}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Seated Concentration Curl
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    EQUIPMENT : DUMBBELL
                                    <br />
                                    EXP LEVEL : BEGINNER
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>

                                <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="spider"
                                image={spider}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Spider Curl
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

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="zott"
                                image={zott}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Zottman Preacher Curl
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    EQUIPMENT : DUMBBELL
                                    <br />
                                    EXP LEVEL : INTERMEDIATE
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>

                                <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 945 }} className='biceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="ezbar"
                                image={ezbar}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Ez Bar Preacher Curl
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

export default Biceps