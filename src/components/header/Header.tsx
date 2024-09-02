import React from 'react';
import Typography from '@mui/material/Typography';
import './header.css';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <Typography className="header" variant="h3" align="left">
      {text}
    </Typography>
  );
};

export default Header;
