import React, { useState } from 'react';
import { InputLabel, Select, Button, Grid, MenuItem, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField';

const AddressForm = () => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={() => {}}>
          <Grid container spacing={3}>
            <FormInput required name="firstname" label="First Name" />
            <FormInput required name="lasttname" label="Last Name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="E-mail" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip/Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={''} onChange={() => {}} fullWidth>
                <MenuItem key={''} value={''}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Divsion</InputLabel>
              <Select value={''} onChange={() => {}} fullWidth>
                <MenuItem key={''} value={''}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={''} onChange={() => {}} fullWidth>
                <MenuItem key={''} value={''}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
