import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import type { Result } from "@/types/types";
import { useFavoriteCharacterStore } from "@/common/store/favorite-character-store";
import { Link } from "react-router-dom";

interface Props {
  character: Result;
}

export const CharacterCard = ({ character }: Props) => {
  const { addFavoriteCharacter } = useFavoriteCharacterStore();

  return (
    <Link to={`/character/${character.id}`}>
      <Card className="w-2xs flex items-center">
        <CardHeader className="relative w-full">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-38 rounded-lg"
          />
        </CardHeader>
        <CardContent className="text-center flex flex-col gap-2">
          {character.name}

          <Button
            variant="outline"
            className={character.favorite ? "bg-red-300" : ""}
            disabled={character.favorite}
            onClick={() => addFavoriteCharacter(character)}
          >
            <Heart size={12} className="fill-red-500" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};
