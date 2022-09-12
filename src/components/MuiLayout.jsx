import React from 'react';
import { Box } from '@mui/material';
import { Fragment } from 'react';

const MuiLayout = () => {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          width: '100px',
          height: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        Code Evolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Fragment>
  );
};

export default MuiLayout;
