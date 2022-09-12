import { Link, Stack, Typography } from '@mui/material';

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="h4">
        Link
      </Link>
      <Typography variant="h4">
        <Link href="#" color="secondary" underline="hover">
          Secondary Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
