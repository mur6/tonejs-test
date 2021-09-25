import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>
  );
}

export default App;
