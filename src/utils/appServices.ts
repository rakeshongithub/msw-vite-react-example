import { api } from "./api";

export const getUsers = () => api.get("/users");

export const getPokemons = () => api.get("https://pokeapi.co/api/v2/pokemon/");
