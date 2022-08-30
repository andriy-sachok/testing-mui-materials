import { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const changeHandler = (event) => {
    setValue(+event.target.value);
  };
  console.log(value);
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={changeHandler}
        precision={0.5}
        emptyIcon={<FavoriteBorderIcon />}
        icon={<FavoriteIcon color="success" />}
      />
    </Stack>
  );
};

export default MuiRating;
