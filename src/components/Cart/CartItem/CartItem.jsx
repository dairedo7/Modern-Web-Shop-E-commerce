import React from 'react';
import { Typography, CardActions, Button, Card, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles.js';

const CartItem = ({ item, handleUpdateQuantity, handleRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
            +
          </Button>
          <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>
            Remove
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
