import { ItemType } from "../utils/types";

export function sortWatchlist(watchlist, sortBy, typeBy) {
  console.log(sortBy);
  console.log(typeBy);
  if (!watchlist) return;

  let watchlistTemp = watchlist?.slice();

  if (typeBy === "movie")
    watchlistTemp = watchlistTemp.filter((movie: ItemType) => {
      return movie.media_type === "movie";
    });
  if (typeBy === "tv")
    watchlistTemp = watchlistTemp.filter(
      (movie: ItemType) => movie.media_type === "tv"
    );

  console.log(watchlistTemp);

  watchlistTemp.sort((a, b) => {
    switch (sortBy) {
      case "rating.asc": {
        const ratingA = a.vote_average || 0;
        const ratingB = b.vote_average || 0;
        return ratingA - ratingB;
      }
      case "rating.dsc": {
        const ratingA = a.vote_average || 0;
        const ratingB = b.vote_average || 0;
        return ratingB - ratingA;
      }
      case "user_score.asc": {
        const ratingA = a.user_rating || 0;
        const ratingB = b.user_rating || 0;
        return ratingA - ratingB;
      }
      case "user_score.dsc": {
        const ratingA = a.user_rating || 0;
        const ratingB = b.user_rating || 0;
        return ratingB - ratingA;
      }
      case "year.asc": {
        let dateA;
        let dateB;
        if (a.media_type === "movie") {
          dateA = a.release_date.split("-")[0];
        } else if (a.media_type === "tv") {
          dateA = a.first_air_date.split("-")[0];
        }
        if (b.media_type === "movie") {
          dateB = b.release_date.split("-")[0];
        } else if (b.media_type === "tv") {
          dateB = b.first_air_date.split("-")[0];
        }
        return Number(dateA) - Number(dateB);
      }
      case "year.dsc": {
        let dateA;
        let dateB;
        if (a.media_type === "movie") {
          dateA = a.release_date.split("-")[0];
        } else if (a.media_type === "tv") {
          dateA = a.first_air_date.split("-")[0];
        }
        if (b.media_type === "movie") {
          dateB = b.release_date.split("-")[0];
        } else if (b.media_type === "tv") {
          dateB = b.first_air_date.split("-")[0];
        }
        return Number(dateB) - Number(dateA);
      }
      case "title": {
        let titleA;
        let titleB;
        if (a.media_type === "movie") {
          titleA = a.title;
        } else if (a.media_type === "tv") {
          titleA = a.name;
        }

        if (b.media_type === "movie") {
          titleB = b.title;
        } else if (b.media_type === "tv") {
          titleB = b.name;
        }

        return titleA.localeCompare(titleB);
      }

      default:
        return 0;
    }
  });

  console.log(watchlistTemp);

  return watchlistTemp;
}
