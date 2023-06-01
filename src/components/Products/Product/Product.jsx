import React from 'react';
import { CardContent, Card, CardMedia, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

function Product({ product, onAddToCart }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent className={classes.content}>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography className={{ flexGrow: 1 }} dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Product;
