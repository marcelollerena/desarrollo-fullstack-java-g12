import { useFavoriteCharacterStore } from "@/common/store/favorite-character-store";
import { CharacterCard } from "@/components/character-card/character-card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Favorites() {
  const { favoriteCharacters } = useFavoriteCharacterStore();

  const hasCharacters = favoriteCharacters.length !== 0;

  return (
    <div className="container">
      {!hasCharacters && (
        <div className="w-full flex gap-2 justify-center">
          No results, add more characters{" "}
          <Link to={"/"} className="text-blue-600 underline flex items-center">
            here. <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {hasCharacters && (
        <div className="flex flex-wrap justify-center gap-4">
          {favoriteCharacters.map((character) => (
            <CharacterCard character={character} />
          ))}
        </div>
      )}
    </div>
  );
}
