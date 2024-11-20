"use client";
import PokemonDetail from "./components/PokemonDetail";

export default function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <PokemonDetail id={params?.id} />;
}
