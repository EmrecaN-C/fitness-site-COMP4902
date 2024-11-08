import React from 'react'
import './css/Exercises.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import chest from './images/chest.png'
import shoulder from './images/shoulder.png'
import biceps from './images/biceps.png'
import forearms from './images/forearms.png'
import triceps from './images/triceps.png'
import back from './images/back.png'
import hamstrings from './images/hamstrings.png'
import quadriceps from './images/quadriceps.png'
import calves from './images/calves.png'
import abs from './images/abs.png'

function Exercises() {
  return (
    <div className="exercise-card-container">

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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
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
          color="success"
          variant="contained"
          >
            ABS EXERCISES
          </Button>
        </CardActions>
      </Card>





    </div>
  );
};
export default Exercises