import React from 'react';
import './style/footer.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Muziekschool Heesch</Typography>
            <Typography variant="body1">
              <a
                href="https://maps.app.goo.gl/rS2UYk4n9s9Pk4P28"
                target="_blank"
                rel="noopener noreferrer"
                className="address"
              >
                Wijststraat 19
                <div>5384RA Heesch</div>
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">email</Typography>
            <Typography variant="body1">
              <a href="mailto:frankmellise@musicschool.com" className="address">
                frankmellise@musicschool.com
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Phone</Typography>
            <Typography variant="body1">
              <a href="tel:06-18402583" className="address">
                06-18402583
              </a>
            </Typography>
            <Typography variant="h6">kvk-nummer</Typography>
            <Typography variant="body1">94782326</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
