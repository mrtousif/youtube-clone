import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useSpaceXLaunches from 'hooks/useSpacXLaunches';

const getRandomImg = (imgs: string[]) => {
  return imgs[Math.floor(Math.random() * imgs.length)];
};

export default function MediaCard() {
  const { data } = useSpaceXLaunches();
  return (
    <Grid container justifyContent="center" spacing={2}>
      {data?.map((item, i) => (
        <Grid item key={i}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image={getRandomImg(item.links.flickr_images)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.mission_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.details}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
