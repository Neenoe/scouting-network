import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import { StyledEngineProvider } from '@mui/material/styles';

import './nav.css'

function Header(props) {
  const { sections, title } = props;

  return (
    <AppBar
    position="static"
    color="red"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="red" marginRight={28} noWrap sx={{ flexGrow: 1 }}>
        Company name
      </Typography>
      <nav>
        <Link className='link'
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 3, mx: 6 }}
        >
          Features
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 6 }}
        >
          Enterprise
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 6 }}
        >
          Support
        </Link>
      </nav>
      <Button href="#" variant="outlined" sx={{ my: 1, mx: 4, color: "red", height: 40, backgroundColor: '#e3f2fd' }}>
        REGISTER
      </Button>
    </Toolbar>
  </AppBar>
  );
}



export default Header;