import React from 'react';
import { Link } from 'react-router-dom';
import './css/Chest.css';

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
import dbc from './images/dumbbell-bench-press.png';
import idbc from './images/incline-dumbbell-bench-press.png'
import bbp from './images/barbell-bench-press.png'
import ibp from './images/incline-bench-press.png'
import pec from './images/machine-fly.png'
import scf from './images/standing-cable-fly.png'
import cd from './images/chest-dip.png'
import dbp from './images/decline-bench-press.png'
import pu from './images/push-ups.png'
import rf from './images/ring-fly.png'

function Chest() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className="chest-container">
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
                    <div className="header-1">CHEST EXERCISES
                    </div>
                    <div className="chest-card-container">
                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="dbc"
                                image={dbc}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Dumbbell Bench Press
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    EQUIPMENT : DUMBELL
                                    <br />
                                    EXP LEVEL : BEGINNER
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>

                                <Button size="large" sx={{ fontFamily: "Quicksand", fontSize: 30, color: "#2a9d8f" }}
                                    component={Link}
                                    to={"/dumbell-bench-press"}
                                >Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="idbc"
                                image={idbc}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Incline Dumbbell Bench Press
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="bbp"
                                image={bbp}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Barbell Bench Press
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="ibp"
                                image={ibp}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Incline Bench Press
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="pec"
                                image={pec}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Pec Dec
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="scf"
                                image={scf}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Standing Cable Fly
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="cd"
                                image={cd}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Chest Dip
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="dbp"
                                image={dbp}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Decline Bench Press
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="pu"
                                image={pu}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Push Up
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

                        <Card sx={{ maxWidth: 945 }} className='chest-exercise-card'>
                            <CardMedia
                                component="img"
                                alt="rf"
                                image={rf}
                                height="auto"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Ring Fly
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    EQUIPMENT : RINGS
                                    <br />
                                    EXP LEVEL : ADVANCED
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

export default Chest