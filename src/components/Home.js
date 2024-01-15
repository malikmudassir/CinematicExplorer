import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to The Lord of the Rings App
          </Typography>
          <Typography variant="body1" paragraph>
            Explore the world of Middle-earth and learn more about your favorite characters, movies, and quotes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/movies"
            fullWidth
          >
            Explore Movies
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/characters"
            fullWidth
          >
            Discover Characters
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/quotes"
            fullWidth
          >
            Find Quotes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
