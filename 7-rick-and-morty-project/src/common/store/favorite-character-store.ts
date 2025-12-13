import type { Result } from "@/types/types";
import { create } from "zustand";

interface FavoriteCharacterStore {
  favoriteCharacters: Result[];

  addFavoriteCharacter: (value: Result) => void;
}

export const useFavoriteCharacterStore = create<FavoriteCharacterStore>(
  (set) => ({
    favoriteCharacters: [],
    addFavoriteCharacter: (newCharacter) =>
      set((state) => ({
        favoriteCharacters: [
          ...state.favoriteCharacters,
          { ...newCharacter, favorite: true },
        ],
      })),
  })
);
