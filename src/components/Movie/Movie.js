import { useState } from "react";
import AddFavourites from "../AddFavourites/AddFavourites";
import styles from "./Movie.module.css";

const Movie = (props) => {
  const FavComponent = props.favComponent;
  return (
    <>
      <div
        className={styles["movie-item"]}
        style={{
          backgroundImage: `url(${
            props.movie.Poster !== "N/A"
              ? props.movie.Poster
              : "https://dummyimage.com/200x300/e5e5e5/000000&text=No+image+found"
          })`,
        }}
      >
        <div
          className={styles.overlay}
          onClick={() => {
            props.handleFav(props.movie);
          }}
        >
          <FavComponent />
          <div className={styles.wrapper}>
            <h4>{props.movie.Title}</h4>
            <small>{props.movie.Year}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
