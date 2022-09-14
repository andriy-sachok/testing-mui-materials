import { Badge, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={2} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color="success">
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
