import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PokemonCard({ pokemon }) {
  return (
    <Card>
      <CardMedia component="img" image={pokemon.data.sprites.front_default} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.data.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
