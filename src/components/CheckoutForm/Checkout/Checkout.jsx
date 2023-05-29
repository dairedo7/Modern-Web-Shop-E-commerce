import React, { useEffect, useState } from 'react';
import { Paper, Step, Stepper, StepLabel, Typography, Divider, CircularProgress, Button, CssBaseline } from '@material-ui/core';

import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { Link, useNavigate } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, handleCaptureCheckout, errorMessage }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  console.log(cart);
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const test = () => {
    setShippingData(nextStep);

    nextStep();
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

        console.log(token);

        setCheckoutToken(token);
      } catch (error) {
        // if (activeStep !== steps.length)
        navigate('/');
      }
    };

    generateToken();
  }, [activeStep, navigate, cart]);

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase !</Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (errorMessage) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {errorMessage}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  }

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} setShippingData={setShippingData} nextStep={nextStep} test={test} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        shippingData={shippingData}
        backStep={backStep}
        handleCaptureCheckout={handleCaptureCheckout}
        timeout={timeout}
      />
    );
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography align="center" variant="h4">
            Checkout
          </Typography>
          <Stepper className={classes.stepper} activeStep={0}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
