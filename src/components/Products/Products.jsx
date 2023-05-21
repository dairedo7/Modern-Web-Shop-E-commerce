import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: '$5',
    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/k/i/6/6-jimny-white-6-sfr-white-original-imagnp4zhejww3uf.jpeg?q=70',
  },
  {
    id: 2,
    name: 'MacBook',
    description: 'Apple macbook',
    price: '$10',
    image: 'https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/40/4098662/Laptop-APPLE-MacBook-Air-2022-13-6-Retina-M2-1.jpg',
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
