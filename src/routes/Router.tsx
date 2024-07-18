import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';


const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));

const {home, about} = routes

export const Router = () => {
  return (

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={about} element={<About />} />
        </Routes>
      </Suspense>

  );
};