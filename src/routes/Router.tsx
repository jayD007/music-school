import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Lessons = lazy(() => import('../pages/lessons/Lessons'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const Gallery = lazy(() => import('../pages/gallery/Gallery'));

const { home, about, lessons, contact, gallery } = routes;

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={about} element={<About />} />
        <Route path={lessons} element={<Lessons />} />
        <Route path={contact} element={<Contact />} />
        <Route path={gallery} element={<Gallery />} />
      </Routes>
    </Suspense>
  );
};
