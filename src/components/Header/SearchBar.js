import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type to search"
        className={styles.input}
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBar;
