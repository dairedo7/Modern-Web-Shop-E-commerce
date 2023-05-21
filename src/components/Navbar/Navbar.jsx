import React from 'react';
import { AppBar, IconButton, Toolbar, Menu, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/e-commerce-cart-shop-logo-template-design-white-background-212245267.jpg';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography className={classes.title} color="inherit" variant="h6">
            <img src={''} alt="Dairedo Commerce" height="25px" className={classes.image} />
            Dairedo Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart products" color="inherit">
              <Badge color="secondary" badgeContent={2}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
