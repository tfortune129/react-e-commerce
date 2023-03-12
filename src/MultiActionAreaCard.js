import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <center>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require(`./images/watch.jpeg`)}
          alt="Apple Watch"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            (F)Apple Watch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          add to cart
        </Button>
      </CardActions>
    </Card>

    &nbsp;&nbsp;

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require(`./images/iphone.jpeg`)}
          alt="Apple Watch"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            (F)iPhone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          add to cart
        </Button>
      </CardActions>
    </Card>

    &nbsp;&nbsp;

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require(`./images/ipad.jpeg`)}
          alt="Apple Watch"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            (F)iPad
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          add to cart
        </Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require(`./images/airpods.jpeg`)}
          alt="Apple Watch"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            (F)airpods
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          add to cart
        </Button>
      </CardActions>
    </Card>
    </center>
  );
}