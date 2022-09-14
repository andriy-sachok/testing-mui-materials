import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';

const MuiTooltip = () => {
  return (
    <Tooltip title="Delete" placement="right" arrow enterDelay={500}>
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
