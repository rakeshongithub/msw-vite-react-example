import { Container, Divider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import UserList from "./components/UserLists";
import PokemonList from "./components/PokemonList";
function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <UserList />
        <Divider />
        <PokemonList />
      </Container>
    </>
  );
}

export default App;
