import { Store } from "../Golobal-Redux/Store";

import PokemonTable from "./PokemonTable";

function SSRPokemonTable() {
  return (
    <div>
      <PokemonTable pokemons={Store.getState().searsh.startupPokemon} />
    </div>
  );
}

export default SSRPokemonTable;