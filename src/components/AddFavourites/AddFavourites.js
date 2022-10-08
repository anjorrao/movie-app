import styles from "./AddFavourites.module.css";
import { FaHeart } from "react-icons/fa";

const AddFavourites = (props) => {
  return <FaHeart className={styles["heart-icon"]} onClick={props.onClick} />;
};

export default AddFavourites;
