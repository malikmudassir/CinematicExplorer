// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'linear-gradient(45deg, #01579b 30%, #4a90e2 90%)', // Custom background
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: 'none',
    color: 'white'
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.navLink}>
              The Lord of the Rings
            </Link>
          </Typography>
          <Link to="/movies" className={classes.navLink}>
            <Button color="inherit">Movies</Button>
          </Link>
          <Link to="/characters" className={classes.navLink}>
            <Button color="inherit">Characters</Button>
          </Link>
          <Link to="/quotes" className={classes.navLink}>
            <Button color="inherit">Quotes</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
