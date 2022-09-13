import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const MuiBottomNavigation = () => {
  const [isShown, setIsShown] = useState(0);
  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: '0px',
      }}
      showLabels
      value={isShown}
      onChange={(event, newValue) => {
        setIsShown(newValue);
      }}
    >
      <BottomNavigationAction icon={<HomeIcon />} label="Home" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
      <BottomNavigationAction icon={<SearchIcon />} label="Search" />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
