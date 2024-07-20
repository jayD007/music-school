import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import frankCrop from '../../assest/images/frankCrop.jpg';
import { textMain } from './text-main';
import './home.css';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const IntroGrid = () => {
  return (
    <Grid container spacing={{ xs: 1, sm: 2, lg: 4 }}>
      <Grid item xs={4}>
        <ButtonBase sx={{ width: '100%', height: '100%' }}>
          <Img alt="complex" src={frankCrop} />
        </ButtonBase>
      </Grid>
      <Grid item xs={8} sm container>
        <h4 className="text-main">{textMain}</h4>
      </Grid>
    </Grid>
  );
};
