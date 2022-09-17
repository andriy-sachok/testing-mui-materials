import React from 'react';
import { Box, Paper } from '@mui/material';
import { Masonry } from '@mui/lab';

const heights = [150, 30, 60, 200, 150, 70, 80, 120, 50, 65, 125, 180];

const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              height,
              border: '1px solid',
            }}
          >
            {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
