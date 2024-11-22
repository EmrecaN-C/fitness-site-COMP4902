import React from 'react';
import './css/Mainpage.css';
import logo from './images/logo.png';
import fitness1 from './images/fitness1.jpeg';
import fitnes from './images/fitnes.jpg';
import info from './images/info.svg';
import food from './images/food.jpg';
import faq from './images/faq.svg';
import cookie from './images/cookie.svg';
import contact from './images/contact.svg';
import Card from '@mui/material/Card';
import quality from './images/quality.svg';
import shield from './images/shield.svg';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/400.css'
import { Link } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Mainpage() {
  return (

    <div className="card-container">
   
      <header>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2a9d8f" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <p>
            <Link to="/" className='link'> Gym & Tonic</Link>
            </p>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </header>
      <main>
      <div className="logo-and-text">
      <img src={logo} alt="Gym & Tonic Logo" className="logo"  />
      <Typography gutterBottom variant="h4" component="div" className='baslik' sx={{ fontFamily: "Quicksand", color: "#2a9d8f" }}>
        Welcome to Gym & Tonic !!!
      </Typography>
      <br />
        <Button variant="contained" color="success">
          <Link to="/exercises" className='link'> See exercises</Link>
        </Button>
        <br />
      </div>
      <div className="in-card-container">
      

      <Card className="card">
        <CardMedia
          component="img"
          alt="fitness1"
          image={fitness1}
          height="auto"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" fontWeight='bold' >
            Do your exercises right
          </Typography>
          <Typography variant="body2" color="text.success">
            Take your body development to the next level with detailed exercises from every area.
          </Typography>
        </CardContent>
      </Card>

      <Card className="card-2">
        <CardContent>
          <CardMedia
            component="img"
            alt="fitness1"
            image={fitnes}
            height="auto"
          />

          <Typography gutterBottom variant="h4" component="div" fontWeight='bold'>
            Detailed and useful programs
          </Typography>
          <Typography variant="body2" color="text.success">
            Get your routine in place by taking action with personalized exercise programs!
          </Typography>
        </CardContent>
      </Card>

      <Card className="card-3">
        <CardMedia
          component="img"
          alt="food"
          image={food}
          height="auto"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" fontWeight='bold'>
            A good body starts with a healthy diet.
          </Typography>
          <Typography variant="body2" color="text.success">
            Get your routine in place by taking action with personalized exercise programs!
          </Typography>
        </CardContent>
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
}

export default Mainpage;