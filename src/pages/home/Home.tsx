import React from 'react';
import './home.css';
import { IntroGrid } from './IntroGrid';
import { GetScreenResolution } from '../../share/utils/screen';
import { IntroCardView } from './IntroCardView';

const Home: React.FC = (props) => {
  const { width } = GetScreenResolution();

  return (
    <div id="home">
      <h1 className="header">
        Muziek maken geeft voldoening, <br />
        verbindt mensen.
      </h1>
      {width > 991 ? <IntroGrid /> : <IntroCardView />}
    </div>
  );
};

export default Home;
