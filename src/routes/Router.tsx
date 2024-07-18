import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const About = lazy(() => import('../pages/about/About'));

const {home, about} = routes
interface Props {
  // Define your props here
}

export const Router: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={about} element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};