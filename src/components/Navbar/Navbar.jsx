import React from 'react';
import { AppBar, IconButton, Toolbar, Menu, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/e-commerce-cart-shop-logo-template-design-white-background-212245267.jpg';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" className={classes.title} color="inherit" variant="h6">
            <img src={logo} alt="Dairedo Commerce" height="25px" className={classes.image} />
            Dairedo Commerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart products" color="inherit">
                <Badge color="secondary" badgeContent={totalItems}>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
