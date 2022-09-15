import { CircularProgress, LinearProgress, Stack } from '@mui/material';

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="info" />
      <CircularProgress color="primary" />
      <CircularProgress color="success" variant="determinate" value={35} />

      <LinearProgress color="info" />
      <LinearProgress color="primary" />
      <LinearProgress
        color="success"
        variant="determinate"
        value={35}
        sx={{ height: '16px', borderRadius: '16px' }}
      />
    </Stack>
  );
};

export default MuiProgress;
