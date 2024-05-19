"use client";

import { useRef } from "react";
import { Store } from "../Golobal-Redux/Store";
import { setStartupPokemon } from "../Golobal-Redux/searshSlice/searsh";
import {Pokemon} from "../Golobal-Redux/searshSlice/types";
function Preloader({ pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    Store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }

  return null;
}

export default Preloader;