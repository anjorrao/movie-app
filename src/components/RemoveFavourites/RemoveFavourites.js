import styles from "./RemoveFavourites.module.css";
import { FaHeart } from "react-icons/fa";

const RemoveFavourites = (props) => {
  return <FaHeart className={styles["heart-icon"]} onClick={props.onClick} />;
};

export default RemoveFavourites;
