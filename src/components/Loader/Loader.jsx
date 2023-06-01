import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ position: 'absolute', left: '50%', top: '50%' }}>
      <CircularProgress />
    </Box>
  );
};
export default Loader;
