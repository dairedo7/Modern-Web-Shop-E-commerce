import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

function Cart({ cart, handleEmptyCart, handleRemoveFromCart, handleUpdateQuantity }) {
  // const isEmpty = !cart.line_items;

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
      <Grid container spacing={3}>
        {cart.line_items.map((item, i, arr) => (
          <Grid item xs={12} sm={6} key={item.id} className={i !== cart.line_items.length - 1 ? classes.items : ''}>
            <CartItem item={item} handleUpdateQuantity={handleUpdateQuantity} handleRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
        <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <div>
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

  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your shopping cart
      </Typography>
      {!cart.line_items.length ? EmptyCart() : FilledCart()}
    </Container>
  );
}

export default Cart;
