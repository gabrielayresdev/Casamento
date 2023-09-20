import React from "react";
import styles from "./Midia.module.sass";
import FeedPhoto from "./FeedPhoto";

const Midia = () => {
  return (
    <div className={styles.midia}>
      <h2 className={styles.title}>Fotos</h2>
      <FeedPhoto />
    </div>
  );
};

export default Midia;
