import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as Tone from "tone";

function App() {
  const [value, setValue] = useState(0);
  const synth = new Tone.Synth().toDestination();

  function playNote(note) {
    synth.triggerAttackRelease(`${note}4`, "8n");
  }
  return (
    <>
    <button className="note" onClick={() => playNote("C")}>
          C
        </button>
        <button className="note" onClick={() => playNote("D")}>
          D
        </button>
        <button className="note" onClick={() => playNote("E")}>
          E
        </button>
        <button className="note" onClick={() => playNote("G")}>
          G
        </button>
        <button className="note" onClick={() => playNote("A")}>
          A
        </button>
      <Box>
        <Button variant="outlined" onClick={() => playNote("C")}>C</Button>
        <Button variant="outlined" onClick={() => playNote("D")}>D</Button>
        <Button variant="outlined" onClick={() => playNote("E")}>E</Button>
        <Button variant="outlined" onClick={() => playNote("G")}>G</Button>
        <Button variant="outlined" onClick={() => playNote("A")}>A</Button>
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
