import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { textMain } from './text-main';
import frankCropFull from '../../assest/images/frankCropFull.jpg';
import './home.css';

export const IntroCardView = () => {
  return (
    <Card className="card">
      <CardHeader />
      <CardMedia
        component="img"
        height="100%"
        image={frankCropFull}
        alt="Frank"
      />
      <CardContent>
        <Typography className="card-content text-main">{textMain}</Typography>
      </CardContent>
    </Card>
  );
};
