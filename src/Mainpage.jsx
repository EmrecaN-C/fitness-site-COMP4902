import React from 'react';
import './css/Mainpage.css';
import logo from './images/logo.png';
import fitness1 from './images/fitness1.jpeg';
import fitnes from './images/fitnes.jpg';
import food from './images/food.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/400.css'
import { Link } from 'react-router-dom'; 

function Mainpage() {
  return (

    <div className="card-container">
      <img src={logo} alt="Gym & Tonic Logo" className="logo" />
      <Typography gutterBottom variant="h4" component="div" className='baslik'>
        Welcome to Gym & Tonic !!!
      </Typography>
      <br />
      <div className="button-card-container">
        <Button variant="contained" color="success">
          <Link to="/exercises" className='link'> See exercises</Link>
        </Button>

      </div>

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



  );
}

export default Mainpage;