import { Button, Snackbar, Alert, AlertProps } from '@mui/material';
import { useState, forwardRef } from 'react';
import { Fragment } from 'react';

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Successfully submited!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
      ></Snackbar> */}

      {/* Custom Snackbar */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submited!
        </SnackbarAlert>
      </Snackbar>
    </Fragment>
  );
};

export default MuiSnackbar;
