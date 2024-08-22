import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  }),
  actions: {
    addFavorite(movie) {
      this.favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    removeFavorite(movieId) {
      this.favorites = this.favorites.filter((movie) => movie.id !== movieId);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
});
