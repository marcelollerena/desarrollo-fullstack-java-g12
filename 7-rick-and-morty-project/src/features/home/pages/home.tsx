import { fetcher } from "@/util/fetcher";
import type { GetAllCharacters } from "@/types/types";
import { CharacterCard } from "@/components/character-card/character-card";

import useSWR from "swr";

export function Home() {
  const { data, isLoading, error } = useSWR<GetAllCharacters>(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );

  if (error) return console.log(error);
  if (isLoading) return <div>Data cargando</div>;
  if (!data) return <div>No hay data</div>;

  const characters = data?.results;

  return (
    <div className="container">
      <div className="flex flex-wrap justify-center gap-4">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}
