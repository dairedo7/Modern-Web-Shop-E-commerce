import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Cart, Products, Navbar, Checkout } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();

    setCart(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    console.log(cart);
    setCart(cart);
  };

  const handleUpdateQuantity = async (lineItemId, quantity) => {
    const result = await commerce.cart.update(lineItemId, { quantity });

    setCart(result);
  };

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  if (!products || !cart) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />

        <Route
          exact
          path="/cart"
          element={
            <Cart cart={cart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
          }
        />
        <Route
          exact
          path="/checkout"
          element={<Checkout cart={cart} order={order} errorMessage={errorMessage} handleCaptureCheckout={handleCaptureCheckout} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
