import Section from "../Layout/Section";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

const Movies = (props) => {
  return (
    <Section>
      <h2>{props.title}</h2>
      {props.movies.length === 0 && <p>No movies found...</p>}
      {props.movies.length !== 0 && (
        <div className={styles["movie-wrapper"]}>
          {props.movies.map((movie, index) => (
            <Movie
              key={index}
              movie={movie}
              handleFav={props.handleFav}
              favComponent={props.favComponent}
            ></Movie>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Movies;
