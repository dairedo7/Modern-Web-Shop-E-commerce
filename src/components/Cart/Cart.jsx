import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import Loader from '../Loader/Loader';

function Cart({ cart, handleEmptyCart, handleRemoveFromCart, handleUpdateQuantity }) {
  const isEmpty = !cart.line_items;

  const classes = useStyles();

  const onEmptyCart = () => handleEmptyCart();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You need to add at least one item to your shopping cart -
      <Link className={classes.link} to="/">
        &nbsp;start here
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3} className={classes.cart}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CartItem item={item} handleUpdateQuantity={handleUpdateQuantity} handleRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
        <div className={classes.cardDetails}>
          <Typography className={classes.cartTotal} variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div className={classes.buttons}>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>
              Empty Card
            </Button>
            <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
              Checkout
            </Button>
          </div>
        </div>
      </Grid>
    </>
  );

  if (isEmpty) return <Loader />;

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your shopping cart
      </Typography>
      {isEmpty.length ? EmptyCart() : FilledCart()}
    </Container>
  );
}

export default Cart;
