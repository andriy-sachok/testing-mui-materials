import { Check } from '@mui/icons-material';
import { Alert, AlertTitle, Button, Stack } from '@mui/material';

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Error text!</Alert>
      <Alert severity="warning">Warning text!</Alert>
      <Alert severity="info">Info text.</Alert>
      <Alert severity="success">Success text.</Alert>

      <Alert
        variant="outlined"
        severity="error"
        onClose={() => alert('Close clicked!')}
      >
        Error text!
      </Alert>
      <Alert
        variant="outlined"
        severity="warning"
        action={
          <Button color="inherit" size="inherit">
            Act
          </Button>
        }
      >
        Warning text!
      </Alert>
      <Alert variant="outlined" severity="info">
        Info text.
      </Alert>
      <Alert variant="outlined" severity="success">
        Success text.
      </Alert>

      <Alert variant="filled" severity="error">
        <AlertTitle>Error!</AlertTitle>
        Error text!
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning!</AlertTitle>
        Warning text!
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        Info text.
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check fontSize="inherit" />}
      >
        <AlertTitle>Success</AlertTitle>
        Success text.
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
