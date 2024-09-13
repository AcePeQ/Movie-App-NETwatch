import ListContainer from "../../Watchlist/ListContainer/ListContainer";
import MovieItem from "../RowList/MovieItem/MovieItem";

function NewList() {
  return (
    <ListContainer>
      <>
        <MovieItem type="listMovie" />
        <MovieItem type="listMovie" />
        <MovieItem type="listMovie" />
        <MovieItem type="listMovie" />
        <MovieItem type="listMovie" />
        <MovieItem type="listMovie" />
        <MovieItem type="listMovie" />
        <MovieItem type="listMovie" />
      </>
    </ListContainer>
  );
}

export default NewList;
