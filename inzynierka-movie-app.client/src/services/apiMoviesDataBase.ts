export async function getMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmIzZGU5MWZmYmI3MjJiYTczZWQxMDMzNTQzODhjMiIsIm5iZiI6MTcyNDU5OTUwNy44OTYyLCJzdWIiOiI2NmM3NzI5NTA1YzA1YTMyYjdlYWJhZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RV92lEGSJmlQIKJ_HFFO9zZRTsoxXRw7OF3lfbkvNrQ",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
