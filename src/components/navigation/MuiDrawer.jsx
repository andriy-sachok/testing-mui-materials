import { Drawer, Box, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Fragment } from 'react';

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Fragment>
      <IconButton
        size="small"
        onClick={() => {
          setIsDrawerOpen(true);
        }}
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side panel
          </Typography>
          <Button href="https://google.com">Google </Button>
        </Box>
      </Drawer>
    </Fragment>
  );
};

export default MuiDrawer;
