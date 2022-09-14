import { Stack, Avatar, AvatarGroup } from '@mui/material';

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>AS</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>BF</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>AS</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>BF</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: 'primary.light', width: '48px', height: '48px' }}
        >
          AS
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: 'success.light', width: '48px', height: '48px' }}
        >
          BF
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
