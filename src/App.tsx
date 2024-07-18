import React from 'react';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Hero, NavBar} from './components';
import { Router } from './routes';

function App() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <NavBar />
      <Router />
    </Container>
  );
}

export default App;
