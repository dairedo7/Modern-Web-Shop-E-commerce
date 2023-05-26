import React, { useState } from 'react';
import { Paper, Step, Stepper, StepLabel, Typography, Divider, CircularProgress, Button } from '@material-ui/core';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment detailsc'];

const Confirmation = () => <div>Confirmation</div>;

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const classes = useStyles();

  const Form = () => {
    activeStep === 0 ? <AddressForm /> : <PaymentForm />;
  };

  return (
    <>
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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
