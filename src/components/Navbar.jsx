import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/pokemon.png";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000ff" }}>
      <Toolbar>
        <Box>
          <img src={logo} alt="Logo" style={{ height: 50, paddingRight: 30 }} />
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/pokedex">
            Pokédex
          </Button>
          <Button color="inherit" component={Link} to="/quiz">
            Quiz
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
