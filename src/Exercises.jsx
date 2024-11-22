import React from 'react';
import { Link } from 'react-router-dom';
import './css/Exercises.css';

import {
  Card, CardContent, CardMedia, Typography, Button,
  CardActionArea, CardActions, AppBar, Box, Toolbar,
  IconButton, Menu, Tooltip, Avatar, MenuItem, Container
} from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';



import chest from './images/chest.png';
import shoulder from './images/shoulder.png';
import biceps from './images/biceps.png';
import forearms from './images/forearms.png';
import triceps from './images/triceps.png';
import back from './images/back.png';
import hamstrings from './images/hamstrings.png';
import quadriceps from './images/quadriceps.png';
import calves from './images/calves.png';
import abs from './images/abs.png';
import logo from './images/logo.png';
import cookie from './images/cookie.svg';
import contact from './images/contact.svg';
import quality from './images/quality.svg';
import shield from './images/shield.svg';
import faq from './images/faq.svg';
import info from './images/info.svg';


function Exercises() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="exercise-card-container">

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
        <div className='in-exercise-card-container'>
        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="chest"
              image={chest}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/chestExercises"
            >
              CHEST EXERCISES

            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="shoulder"
              image={shoulder}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/shoulderExercises"
            >
              SHOULDER EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="biceps"
              image={biceps}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/bicepsExercises"
            >
              BICEPS EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="triceps"
              image={triceps}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/tricepsExercises"
            >
              TRICEPS EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="forearms"
              image={forearms}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/forearmsExercises"
            >
              FOREARMS EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="back"
              image={back}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/backExercises"
            >
              BACK EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="hamstrings"
              image={hamstrings}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/hamstringsExercises"
            >
              HAMSTRINGS EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="quardriceps"
              image={quadriceps}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/quadsExercises"
            >
              QUARDRICEPS EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="calves"
              image={calves}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/calvesExercises"
            >
              CALVES EXERCISES
            </Button>
          </CardActions>
        </Card>

        <Card className="exercise-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="abs"
              image={abs}
              height="auto"
            />
            <CardContent>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              className='button'
              sx={{ backgroundColor: "#2a9d8f" }}
              variant="contained"
              component={Link}
              to="/absExercises"
            >
              ABS EXERCISES
            </Button>
          </CardActions>
        </Card>
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
  );
};
export default Exercises