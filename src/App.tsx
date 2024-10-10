import { Container, Divider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import UserList from "./components/UserLists";
import PokemonList from "./components/PokemonList";
import { Counter } from "./components/Counter";
function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <UserList />
        <Divider />
        <PokemonList />
        <Counter />
      </Container>
    </>
  );
}

export default App;
