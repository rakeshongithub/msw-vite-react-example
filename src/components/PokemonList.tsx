import { useEffect, useState } from "react";
import { getPokemons } from "../utils/appServices";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
type Pokemons = {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemons | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  useEffect(() => {
    getPokemons().then((response: { data: React.SetStateAction<Pokemons> }) =>
      response?.data
        ? setPokemons(response?.data as Pokemons)
        : setPokemons(null)
    );
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedPokemon(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, m: 5 }}>
      <Typography gutterBottom variant="h5" component="div">
        Pokemon List
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Pokemon</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedPokemon}
          label="Pokemon List"
          onChange={handleChange}
        >
          {pokemons?.results?.map((pokemon: Pokemons["results"][0]) => (
            <MenuItem key={pokemon.url} value={pokemon.name}>
              {pokemon.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PokemonList;
