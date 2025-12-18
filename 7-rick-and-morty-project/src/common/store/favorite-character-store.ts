import type { Result } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteCharacterStore {
  favoriteCharacters: Result[];

  addFavoriteCharacter: (value: Result) => void;
}

export const useFavoriteCharacterStore = create<FavoriteCharacterStore>()(
  persist(
    (set) => ({
      favoriteCharacters: [],
      addFavoriteCharacter: (newCharacter) =>
        set((state) => ({
          favoriteCharacters: [
            ...state.favoriteCharacters,
            { ...newCharacter, favorite: true },
          ],
        })),
    }),
    {
      name: "favorit-characters",
    }
  )
);
