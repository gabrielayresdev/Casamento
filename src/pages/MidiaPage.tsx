import React from "react";
import Footer from "../components/shared/Footer/Footer";
import Midia from "../components/Midia/Midia";
import styles from "./MidiaPage.module.sass";

const MidiaPage = () => {
  return (
    <div className={styles.page}>
      <Midia />
      <Footer />
    </div>
  );
};

export default MidiaPage;
