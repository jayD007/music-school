import React from 'react';
import './style/footer.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { email, kvk, phone } from '../../utils';
import logo from '../../assest/icons/muziekschool_heesch_logo.png';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import { Stack } from '@mui/material';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <img src={logo} alt="Music school heesche" width="200px" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction="row" spacing={1} sx={{ marginBottom: '20px' }}>
                <EmailTwoToneIcon />
                <Typography variant="body1">
                  <a href={`mailto:${email}`} className="address">
                    {email}
                  </a>
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <PhoneAndroidTwoToneIcon />
                <Typography variant="body1">
                  <a href={`tel:${phone}`} className="address">
                    {phone}
                  </a>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ marginTop: '20px' }}>
                <FmdGoodTwoToneIcon />
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">kvk-nummer</Typography>
              <Stack direction="row" spacing={1}>
                <AssignmentTwoToneIcon />
                <Typography variant="body1">{kvk}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};
