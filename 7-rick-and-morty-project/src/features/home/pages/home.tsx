import useSWR from "swr";
import { useState } from "react";
import { fetcher } from "@/util/fetcher";
import type { GetAllCharacters } from "@/types/types";
import { CharacterCard } from "@/components/character-card/character-card";

import { Skeleton } from "@/components/ui/skeleton";
import { useFavoriteCharacterStore } from "@/common/store/favorite-character-store";
import { MergeFavoritesCharacters } from "../utils/merge-favorites-characters";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CharacterStatus = "alive" | "dead" | "unknown" | "";

export function Home() {
  const [status, setStatus] = useState<CharacterStatus>("");

  const { data, isLoading, error } = useSWR<GetAllCharacters>(
    `https://rickandmortyapi.com/api/character/?status=${status}`,
    fetcher
  );

  const { favoriteCharacters } = useFavoriteCharacterStore();

  if (error) return <div>Ocurrio un error...</div>;

  if (!data || isLoading)
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 20 }).map((_, idx) => (
          <Skeleton className="w-2xs h-75.5" key={idx} />
        ))}
      </div>
    );

  const characters = data?.results;

  const formattedCharacters = MergeFavoritesCharacters(
    characters,
    favoriteCharacters
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <Select
          defaultValue={status}
          onValueChange={(value: CharacterStatus) => setStatus(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder={"Select status"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alive">Alive</SelectItem>
            <SelectItem value="dead">Dead</SelectItem>
            <SelectItem value="unknown">unknown</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {formattedCharacters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}
