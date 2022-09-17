import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Save } from '@mui/icons-material';
import React from 'react';

function MuiLoadingButton() {
  return (
    <Stack spacing={2} direction='column'>
      <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>
          Submit
        </LoadingButton>
      </Stack>
      <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'>Fetch data</LoadingButton>
        <LoadingButton
          loading
          loadingIndicator='Fetching...'
          variant='outlined'
        >
          Fetch data
        </LoadingButton>
      </Stack>
      <Stack spacing={2} direction='row'>
        <LoadingButton
          veriant='outlined'
          loadingPosition='start'
          startIcon={<Save />}
        >
          Save
        </LoadingButton>
        <LoadingButton
          loading
          veriant='outlined'
          loadingPosition='start'
          startIcon={<Save />}
        >
          Save
        </LoadingButton>
      </Stack>
    </Stack>
  );
}

export default MuiLoadingButton;
