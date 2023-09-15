import React from "react";
import styles from "./InfoArticle.module.sass";

const InfoArticle = ({ children }: React.PropsWithChildren) => {
  return <article className={styles.article}>{children}</article>;
};

export default InfoArticle;
