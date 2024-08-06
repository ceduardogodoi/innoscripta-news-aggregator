import { SourceValue } from "@/constants";
import { z } from "zod";

export const APP_KEY = "@the-news-aggregator/favorite-sources";

const favoriteSourcesFromStorageSchema = z.array(z.custom<SourceValue>());

export const storage = {
  getFavoriteSources(): SourceValue[] {
    const str = window.localStorage.getItem(APP_KEY);
    if (str == null) return [];

    const favoriteSources = JSON.parse(str);
    return favoriteSourcesFromStorageSchema.parse(favoriteSources);
  },
  addFavoriteSource(source: SourceValue): void {
    const favoriteSources = this.getFavoriteSources();
    favoriteSources.push(source);

    window.localStorage.setItem(APP_KEY, JSON.stringify(favoriteSources));
  },

  removeFavoriteSource(source: SourceValue): void {
    const favoriteSources = this.getFavoriteSources();
    const index = favoriteSources.findIndex(
      (favoriteSource) => favoriteSource === source,
    );

    if (index > -1) {
      favoriteSources.splice(index, 1);
      window.localStorage.setItem(APP_KEY, JSON.stringify(favoriteSources));
    }
  },

  isFavoriteSource(source: SourceValue): boolean {
    const favoriteSources = this.getFavoriteSources();

    return favoriteSources.includes(source);
  },
};
