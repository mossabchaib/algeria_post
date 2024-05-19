
import { NextResponse } from "next/server";

import pokemon from "../../../pokemon.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");  console.log('title',title);
  const pokemonData = pokemon.filter((p:any) =>
    p.title.toLowerCase().includes(title?.toLowerCase() ?? "")
  
  );
  return NextResponse.json(pokemonData);
}