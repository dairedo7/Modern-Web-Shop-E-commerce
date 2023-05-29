import React, { useEffect, useState } from 'react';
import { InputLabel, Select, Button, Grid, MenuItem, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField';
import { Link } from 'react-router-dom';

const AddressForm = ({ checkoutToken, test }) => {
  console.log(checkoutToken);
  console.log(test);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  console.log(1);
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
  const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.desctiption} - (${sO.price.formatted_with_symbol})` }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingCountry(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  console.log(2);
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);
  console.log(3);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
          <Grid container spacing={3}>
            <FormInput name="firstname" label="First Name" />
            <FormInput name="lasttname" label="Last Name" />
            <FormInput name="address1" label="Address" />
            <FormInput name="email" label="E-mail" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="Zip/Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)} fullWidth>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
                <MenuItem key={''} value={''}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Division</InputLabel>
              <Select value={shippingSubdivision} onChange={(e) => setShippingSubdivision(e.target.value)} fullWidth>
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
                <MenuItem key={''} value={''}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)} fullWidth>
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
                <MenuItem key={''} value={''}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} to="/cart" variant="outline">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
