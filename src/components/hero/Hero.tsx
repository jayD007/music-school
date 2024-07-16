import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import heroImage from '../../assest/images/heroImage.jpg';

const HeroImageBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${heroImage})`,
  height: '88vh',
  width: '100%',

  backgroundPosition: 'center',
  backgroundRepeat: 'space',
  backgroundSize: 'cover',
  position: 'relative',
  '@media (max-width:600px)': {
    backgroundPosition: 'right',
    height: '50vh',
  },
  '@media (min-width:604px)': {
    backgroundPosition: 'right',
    height: '65vh',
    width: '100%',
  },

  '@media (min-width:601px) and (max-width:1024px)': {
    backgroundPosition: 'right',
    height: '60vh',
  },
  '@media (min-width:1025px)': {
    backgroundPosition: 'top',
    maxWidth: '1200px',
  },
}));
const HeroTextBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  position: 'absolute',
  top: '50%',
  left: '30px',
  transform: 'translateY(-50%)',
  color: 'white',
  fontsize: '1.5rem',
  '@media (min-width:984px)': {
    top: '70%',
  },
  '@media (max-width:950px)': {
    top: '90%',
  },
}));

const HeroImage = () => {
  return (
    <HeroImageBox>
      <HeroTextBox>
        <Typography variant="h2">Frank Mellise</Typography>
        <Typography variant="body1">Muziekschool Heesch</Typography>
      </HeroTextBox>
    </HeroImageBox>
  );
};

export default HeroImage;
