import React from 'react';
import './style/footer.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Props {
  // Define your props here
}

export const Footer: React.FC<Props> = (props) => {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Muziekschool Heesch</Typography>
            <Typography variant="body1">
              Wijststraat 19
              <div>5384RA Heesch</div>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Curses</Typography>
            <Typography variant="body1">
              Content for the second column.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Column 3</Typography>
            <Typography variant="body1">
              Content for the third column.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
