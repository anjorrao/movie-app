import styles from "./Section.module.css";

const Section = (props) => {
  return (
    <section className={styles.section}>
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Section;
