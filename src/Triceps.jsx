import React from 'react';
import { Link } from 'react-router-dom';
import './css/Triceps.css';

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


import sodte from './images/triceps-workouts/seated-overhead-dumbbell-tricep-extension.png';
import ropete from './images/triceps-workouts/rope-tricep-extension.png';
import stbartri from './images/triceps-workouts/straight-bar-tricep-extension.png';
import ezbarsku from './images/triceps-workouts/ez-bar-skullcrusher.png';
import onearm from './images/triceps-workouts/one-arm-standing-dumbbell-extension.png';
import closeg from './images/triceps-workouts/close-grip-push-up.png';
import stbentover from './images/triceps-workouts/standing-bent-over-tricep-dumbbell-kickback.png';
import diptri from './images/triceps-workouts/tricep-dip.png';
import weig from './images/triceps-workouts/weighted-dips.png';
import threebe from './images/triceps-workouts/three-bench-dip.jpg';




function Triceps() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <div className="triceps-container">
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
                    <div className="header-1">TRICEPS EXERCISES
                    </div>
                    <div className="triceps-card-container">
                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="sodte"
                                image={sodte}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Seated Overhead Dumbbell Tricep Extension
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="ropete"
                                image={ropete}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                     Rope Tricep Extension
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="stbartri"
                                image={stbartri}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Straight Bar Tricep Extension
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="ezbarsku"
                                image={ezbarsku}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Ez Bar Skullcrusher
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="onearm"
                                image={onearm}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    One Arm Standing Extension
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="closeg"
                                image={closeg}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Close Grip Push up
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="stbentover"
                                image={stbentover}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Standing Bent Over Tricep Dumbbell Kickback
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="diptri"
                                image={diptri}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Tricep Dip
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

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="weig"
                                image={weig}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Weighted Dips
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    EQUIPMENT : OTHER
                                    <br />
                                    EXP LEVEL : ADVANCED
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>

                                <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}>Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 945 }} className='triceps-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="threebe"
                                image={threebe}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Three Bench Dip
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

export default Triceps