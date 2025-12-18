import type { Result } from "@/types/types";

export function MergeFavoritesCharacters(
  characters: Result[],
  favorites: Result[]
) {
  const favoritesIds = new Set(favorites.map((favorite) => favorite.id));

  const formattedCharacters = characters.map((character) => {
    return { ...character, favorite: favoritesIds.has(character.id) };
  });

  return formattedCharacters;
}
