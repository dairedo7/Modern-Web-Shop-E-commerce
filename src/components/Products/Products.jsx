import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { Pagination, Stack } from '@mui/material';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const classes = useStyles();

  const totalPages = Math.ceil(products.length / 8);
  const itemsPerPage = 8;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentProducts = products.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    if (products.length) setIsProductsLoaded(true);
  }, [products]);

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {currentProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      {isProductsLoaded && (
        <Stack className={classes.stack} spacing={2} alignItems="center">
          <Pagination count={totalPages} currentPage={currentPage} onChange={handlePageChange} variant="outlined" color="primary" />
        </Stack>
      )}
    </main>
  );
};

export default Products;
