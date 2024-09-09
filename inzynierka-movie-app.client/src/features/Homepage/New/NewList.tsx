import ListContainer from "../../Watchlist/ListContainer/ListContainer";
import MovieItem from "../RowList/MovieItem/MovieItem";

function NewList() {
  return (
    <ListContainer>
      <>
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </>
    </ListContainer>
  );
}

export default NewList;
