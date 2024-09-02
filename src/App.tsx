import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Footer, Hero, NavBar } from './components';
import { Router } from './routes';
import { pages } from './components/navBar/constants/pages';

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentPage = pages.find((page) => page.route === location.pathname);
    if (currentPage) {
      const element = document.getElementById(currentPage.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Container maxWidth="lg">
      <Hero />
      <NavBar />
      <Router />
      <Footer />
    </Container>
  );
}

export default App;
