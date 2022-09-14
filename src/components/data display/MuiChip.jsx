import { Avatar, Chip, Stack } from '@mui/material';
import Face from '@mui/icons-material/Face';
import { useState } from 'react';

const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Single Chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="Single Chip"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>A</Avatar>}
      />
      <Chip
        label="Clickable"
        color="success"
        onClick={() => alert('Clicked!')}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert('Clicked!')}
        onDelete={() => alert('Deleted.')}
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="primary"
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};
export default MuiChip;
