import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box sx={{ width: '250px' }}>
      {loading ? (
        <Skeleton width={256} height={144} animation="wave" />
      ) : (
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/039/739/621/original/kartheek-raj-11-emisodara-800.gif?1626796234"
          width={256}
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: '100%', marginTop: '12px' }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width="40px"
            height="40px"
            animation="wave"
          />
        ) : (
          <Avatar>A</Avatar>
        )}
        <Stack sx={{ width: '80%' }}>
          {loading ? (
            <Fragment>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>{' '}
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </Fragment>
          ) : (
            <Typography variant="body1">MUI React example</Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
