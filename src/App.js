import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import AddFavourites from "./components/AddFavourites/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=c06c0323`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavHandler = (movie) => {
    const newFavList = [...favourites, movie];
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  const removeFavHandler = (movie) => {
    const newFavList = favourites.filter((fav) => fav.Title !== movie.Title);
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  return (
    <>
      <Header searchValue={searchValue} setSearch={setSearch} />
      <main>
        <Movies
          title={"Movies"}
          movies={movies}
          handleFav={addFavHandler}
          favComponent={AddFavourites}
        />
        <Movies
          title={"Favourites"}
          movies={favourites}
          handleFav={removeFavHandler}
          favComponent={RemoveFavourites}
        />
      </main>
    </>
  );
}

export default App;
