import React from 'react';
import { Link } from 'react-router-dom';
import './css/DumbellBPress.css';

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
import videoo from './images/dumbell-bench-press.mp4';
import likeB from './images/like.svg';
import dislikeB from './images/dislike.svg';

function DumbellBPress() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className="dbpress-container">
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
                        className='dbpress-button'
                        sx={{ fontFamily: "Quicksand", backgroundColor: "#2a9d8f" }}
                        component={Link}
                        to={"/chestExercises"}
                    >Back to the Chest Exercises Page</Button>
                     <div className="header-1">DUMBBELL BENCH PRESS
                     </div>
                    <div className="dbpress-card-container">
                        <Card >
                           
                            <div style={{ height: "auto" }} className='video-and-rate'>
                                <video
                                    src={videoo}
                                    controls
                                />
                                <div className='rate-buttons'>
                                <button className='like-buttons' >
                                    <img src={likeB} alt="like" className='like-button' />
                                </button>
                                <button className='like-buttons' >
                                    <img src={dislikeB} alt="dislike" className='like-button' />
                                </button>
                                </div>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Dumbbell Bench Press Overview
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    The dumbbell bench press is a variation of the barbell bench press and an exercise used to build the muscles of the chest.
                                    Often times, the dumbbell bench press is recommended after reaching a certain point of strength on the barbell bench press to avoid pec and shoulder injuries.
                                    Additionally, the dumbbell bench press provides an ego check in the amount of weight used due to the need to maintain shoulder stability throughout the exercise.
                                    The exercise itself can be featured as a main lift in your workouts or an accessory lift to the bench press depending on your goals
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                Dumbbell Bench Press Instructions
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                               1.Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.
                               <br />
                               2.To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.
                               <br />
                               3.Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).
                               <br />
                               4.Contract the chest and push the dumbbells back up to the starting position.
                               <br />
                               5.Repeat for the desired number of repetitions.
                               <br />
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}>
                                    Dumbbell Bench Press Overview
                                </Typography>
                                <Typography className='mini-text' sx={{ color: "#2a9d8f", fontFamily: "Quicksand", fontWeight: "bold" }}>
                                1.Maintain more tension through the pecs by not locking out the elbows entirely.
                               <br />
                               2.Keep the weights slightly tilted at a 45 degree angle in order to keep the elbows in a neutral position.
                               <br />
                               3.Don’t allow the dumbbells to collide at the top of each rep - bouncing them together may cause you to lose stability within the shoulder and injure yourself.
                               <br />
                               4.Squeeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.
                               <br />
                               5.Keep your shoulder blades pinched together to ensure the shoulders remain in a safe position.
                               <br />
                               6.Imagine you’re trying to push yourself away from the weights rather than pushing the weights away from yourself.
                               <br />
                               7.If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.
                               <br />
                               8.Ensure you maintain some tension in your abs and don’t allow your lower back to arch excessively.
                               <br />
                               9.Keep your feet flat on the floor and don’t allow the lower body to move during the set.
                               <br />
                                </Typography>
                            </CardContent>

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

export default DumbellBPress