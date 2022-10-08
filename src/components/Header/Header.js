import styles from "./Header.module.css";
import { BiMoviePlay } from "react-icons/bi";
import SearchBar from "./SearchBar";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navbar}>
          <div className={styles["navbar-brand"]}>
            <a href="/" title="Movies">
              <BiMoviePlay></BiMoviePlay>
            </a>
          </div>
          <SearchBar
            searchValue={props.searchValue}
            setSearch={props.setSearch}
          ></SearchBar>
        </div>
      </div>
    </header>
  );
};

export default Header;
